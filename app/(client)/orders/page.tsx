"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import OrdersComponent from "@/components/OrdersComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMyOrders } from "@/sanity/helpers/client";
import { FileX, Loader2 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Order } from "@/sanity.types";

const OrdersPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
      return;
    }

    const fetchOrders = async () => {
      if (user?.uid) {
        try {
          const fetchedOrders = await getMyOrders(user.uid);
          setOrders(fetchedOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user, loading, router]);

  if (loading || isLoading) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen pb-10">
      <Container className="py-10">
        {orders?.length ? (
          <Card className="w-full bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-white">Order List</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow className="border-neutral-800 hover:bg-neutral-800/50">
                      <TableHead className="w-[100px] md:w-auto text-gray-400">
                        Order Number
                      </TableHead>
                      <TableHead className="hidden md:table-cell text-gray-400">
                        Date
                      </TableHead>
                      <TableHead className="text-gray-400">Customer</TableHead>
                      <TableHead className="hidden sm:table-cell text-gray-400">
                        Email
                      </TableHead>
                      <TableHead className="text-gray-400">Total</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="hidden sm:table-cell text-gray-400">
                        Invoice Number
                      </TableHead>
                      <TableHead className="text-gray-400">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <OrdersComponent orders={orders} />
                </Table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-900 rounded-lg border border-neutral-800">
            <FileX className="h-24 w-24 text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-white">
              No orders found
            </h2>
            <p className="mt-2 text-sm text-gray-400 text-center max-w-md">
              It looks like you haven&apos;t placed any orders yet. Start
              shopping to see your orders here!
            </p>
            <Button asChild className="mt-6 bg-white text-black hover:bg-gray-200 font-bold px-8">
              <Link href="/">Browse Products</Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OrdersPage;

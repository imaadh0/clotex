import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import PriceFormatter from "./PriceFormatter";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface OrderDetailsDialogProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  order: any;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-scroll bg-neutral-900 border-neutral-800 text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-white">Order Details - {order.orderNumber}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <p>
            <strong className="text-white">Customer:</strong> {order.customerName}
          </p>
          <p>
            <strong className="text-white">Email:</strong> {order.email}
          </p>
          <p>
            <strong className="text-white">Date:</strong>{" "}
            {order.orderDate && new Date(order.orderDate).toLocaleDateString()}
          </p>
          <p>
            <strong className="text-white">Status:</strong>{" "}
            <span className="capitalize text-green-400 font-medium">
              {order.status}
            </span>
          </p>
          <p>
            <strong className="text-white">Invoice Number:</strong> {order?.invoice?.number}
          </p>
          {order?.invoice && (
            <Button className="bg-transparent border border-neutral-700 text-gray-300 mt-2 hover:text-white hover:border-white hover:bg-neutral-800 hoverEffect ">
              {order?.invoice?.hosted_invoice_url && (
                <Link href={order?.invoice?.hosted_invoice_url} target="_blank">
                  Download Invoice
                </Link>
              )}
            </Button>
          )}
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-800 hover:bg-neutral-800/50">
              <TableHead className="text-gray-400">Product</TableHead>
              <TableHead className="text-gray-400">Quantity</TableHead>
              <TableHead className="text-gray-400">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {order.products?.map((product: any, index: number) => (
              <TableRow key={index} className="border-neutral-800 hover:bg-neutral-800/50">
                <TableCell className="flex items-center gap-2 text-gray-300">
                  {product?.product?.images && (
                    <Image
                      src={urlFor(product?.product?.images[0]).url()}
                      alt="productImage"
                      width={50}
                      height={50}
                      className="border border-neutral-700 rounded-sm"
                    />
                  )}

                  {product?.product && product?.product?.name}
                </TableCell>
                <TableCell className="text-gray-300">{product?.quantity}</TableCell>
                <TableCell>
                  <PriceFormatter
                    amount={product?.product?.price}
                    className="text-white font-medium"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 text-right flex items-center justify-end border-t border-neutral-800 pt-4">
          <div className="w-44 flex flex-col gap-1">
            {order?.amountDiscount !== 0 && (
              <div className="w-full flex items-center justify-between">
                <strong className="text-white">Discount: </strong>
                <PriceFormatter
                  amount={order?.amountDiscount}
                  className="text-white font-bold"
                />
              </div>
            )}
            {order?.amountDiscount !== 0 && (
              <div className="w-full flex items-center justify-between">
                <strong className="text-white">Subtotal: </strong>
                <PriceFormatter
                  amount={
                    (order?.totalPrice as number) +
                    (order?.amountDiscount as number)
                  }
                  className="text-white font-bold"
                />
              </div>
            )}
            <div className="w-full flex items-center justify-between">
              <strong className="text-white">Total: </strong>
              <PriceFormatter
                amount={order?.totalPrice}
                className="text-white font-bold"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;

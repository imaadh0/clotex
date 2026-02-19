import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ClotexLogo from "./clotex/ClotexLogo";

const NoAccessToCart = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-[#0a0a0a] p-4 min-h-[50vh]">
      <Card className="w-full max-w-md bg-neutral-900 border-neutral-800">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <ClotexLogo className="text-3xl" />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-400 text-center font-medium">
            Log in to view your cart items and checkout. Don&rsquo;t miss out on
            your favorite products!
          </p>
          <Button asChild className="w-full font-bold bg-white text-black hover:bg-gray-200" size="lg">
            <Link href="/signin">Sign in</Link>
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-gray-500 text-center">
            Don&rsquo;t have an account?
          </div>
          <Button asChild variant="outline" className="w-full border-neutral-700 text-white hover:bg-neutral-800 hover:text-white" size="lg">
            <Link href="/signup">Create an account</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccessToCart;

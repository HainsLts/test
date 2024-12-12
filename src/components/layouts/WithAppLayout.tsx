import React from "react";
import AppLayout from "@/src/components/layouts/AppLayout";

//HOC https://viblo.asia/p/higher-order-components-hoc-trong-react-js-1Je5EvoAKnL
export default function withAppLayout(Component: React.ComponentType) {
  return function WrappedComponent(props: any) {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };
}

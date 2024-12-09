export function Sheet({ children }) {
    return <div className="fixed inset-0 bg-gray-900 bg-opacity-50">{children}</div>;
  }
  
  export function SheetContent({ children }) {
    return <div className="fixed right-0 top-0 bg-white w-64 h-full shadow-lg">{children}</div>;
  }
  
  export function SheetTrigger({ children, asChild }) {
    return <div>{children}</div>; // asChildは実装に応じて変更してください
  }
  
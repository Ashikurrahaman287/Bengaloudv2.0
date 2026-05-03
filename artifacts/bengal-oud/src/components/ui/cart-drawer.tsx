import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61558718344683";

export function CartDrawer() {
  const { items, removeFromCart, clearCart, cartOpen, setCartOpen } = useCart();
  const total = items.reduce((sum, i) => sum + i.priceUSD * i.quantity, 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-primary" />
                <span className="font-serif text-lg text-foreground">Your Cart</span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag size={40} className="text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Your cart is empty</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-4 text-[10px] uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-4 border border-border bg-background"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-foreground text-base">{item.name}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                          {item.size} · Qty {item.quantity}
                        </p>
                        <p className="text-primary font-medium mt-1">${item.priceUSD * item.quantity} USD</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Total</span>
                  <span className="font-serif text-2xl text-foreground">${total} USD</span>
                </div>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-primary-foreground text-center py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors font-medium"
                  onClick={() => setCartOpen(false)}
                >
                  Purchase on Facebook
                </a>

                <button
                  onClick={clearCart}
                  className="w-full text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

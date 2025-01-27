// components/Layout.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "./Loader";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true); // Show loader
    const handleComplete = () => setLoading(false); // Hide loader

    // Subscribe to route change events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup the event listeners on unmount
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div>
      {/* Show loader conditionally */}
      {loading && (
        <Loader />
      )}
      {children}
    </div>
  );
}

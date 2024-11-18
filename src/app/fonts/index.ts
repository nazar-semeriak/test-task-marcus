import localFont from "next/font/local";

export const googleSans = localFont({
  src: [
    {
      path: "GoogleSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "GoogleSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "GoogleSans-Bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
});

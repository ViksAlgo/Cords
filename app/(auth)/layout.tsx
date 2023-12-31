// // import React from "react";
// // import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
// // import { dark } from "@clerk/themes";

// //import { ClerkProvider } from "@clerk/nextjs/app-beta"

// import "../globals.css";

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Auth",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <ClerkProvider
// //       appearance={{
// //         baseTheme: dark,
// //       }}
// //     >
// //       <html lang='en'>
// //         <body className={`${inter.className} bg-dark-1`}>{children}</body>
// //       </html>
// //     </ClerkProvider>
// //   );
// // }



// export const metadata={
//   title:'Cords',
//   description:'A nexxt js 13 meta threads application'
// }

// const inter=Inter({subsets:["latin"]})

// export default function RootLayout({
//   children
// }:{
//   children:React.ReactNode
// }) {
//   return(
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${inter.className} bg-dark-1`}>
//           {children}
//         </body>

//       </html>
//     </ClerkProvider>
//   )
// }

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center
          min-h-screen">{children}
          </div>   
        </body>
      </html>
    </ClerkProvider>
  );
}
import { Params } from "@/types/type";
import { capitalize } from "@/utils/helper";

export async function generateMetadata({ params }: { params: Params }) {
  const { name } = await params;
  return {
    title: `${capitalize(name)}`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

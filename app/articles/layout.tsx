import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StockFlow | Articles',
};

export default function BlogLayout({children}: {
    children: React.ReactNode;
}) {
    return <div className="">
        {children}
    </div>
}
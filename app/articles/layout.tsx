export const metadata = {
    title: 'StockFlow | Articles',
    description: 'Explore our latest articles & research. Stay up to date with the market',
};

export default function BlogLayout({children}: {
    children: React.ReactNode;
}) {
    return <div className="">
        {children}
    </div>
}
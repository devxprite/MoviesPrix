import { BottomNav } from '@/components/bottom-nav';
import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FavoritesProvider } from '@/context/favorites-context';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FavoritesProvider>
            <div className="h-dvh overflow-hidden flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 relative max-md:h-[calc(100dvh-4rem)]">
                    <ScrollArea className="h-full">
                        <div className="max-w-screen-xl mx-auto px-2 py-3 md:px-5 md:py-4 !pb-16">{children}</div>
                    </ScrollArea>
                </main>
                <BottomNav />
            </div>
        </FavoritesProvider>
    );
};

export default DashboardLayout;

import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-dvh overflow-hidden flex flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 relative max-md:h-[calc(100dvh-4rem)]">
                <ScrollArea className="h-full">
                    <div className="max-w-7xl mx-auto p-3 md:p-5 !pb-16">{children}</div>
                </ScrollArea>
            </main>
            {/* <BottomNav /> */}
        </div>
    );
};

export default DashboardLayout;

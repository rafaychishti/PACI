import { Menu } from 'lucide-react';
import * as React from 'react';

import { NavLinks } from '@/app/sidebar';
import { Button } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { APP_NAME } from '@/shared/lib/constants';

/** Slide-out nav drawer, used below the `md` breakpoint in place of the persistent sidebar. */
export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>{APP_NAME}</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto pb-4">
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

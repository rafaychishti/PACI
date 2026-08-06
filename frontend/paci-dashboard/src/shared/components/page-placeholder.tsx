import type { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

interface PagePlaceholderProps {
  title: string;
  description: string;
  comingIn: string;
  children?: ReactNode;
}

/**
 * Every Sprint 1 route renders one of these. Centralizing it means the
 * "no business logic yet" pages all look and behave consistently, and
 * there's exactly one place to remove this pattern from as each feature
 * gets built out in its own sprint.
 */
export function PagePlaceholder({ title, description, comingIn, children }: PagePlaceholderProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-data text-xs tracking-wide text-muted-foreground/80 uppercase">
              Coming in
            </span>{' '}
            {comingIn}
          </p>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

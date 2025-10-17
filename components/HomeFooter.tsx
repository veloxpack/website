import Link from 'next/link';
import { Github, Heart, Code, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function HomeFooter() {
  return (
    <>
      <Separator />

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">Veloxpack</h3>
                <Badge variant="secondary" className="text-xs">
                  Open Source
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                Kubernetes-native media processing platform
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Button asChild variant="ghost" size="sm">
                <Link href="https://github.com/veloxpack" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/docs" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Docs
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 Veloxpack.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com/veloxpack" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

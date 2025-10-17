import Link from 'next/link';
import { Code, Twitter, Linkedin } from 'lucide-react';
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold text-foreground">Veloxpack</h3>
                <Badge variant="secondary" className="text-xs">
                  Open Source
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Kubernetes-native media processing platform
              </p>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
              <div className="space-y-2">
                <Button asChild variant="ghost" size="sm" className="justify-start p-0 h-auto">
                  <Link href="/docs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Code className="h-4 w-4" />
                    Docs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Social Section */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Social</h4>
              <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="sm" className="p-2">
                  <Link href="https://x.com/veloxpack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="p-2">
                  <Link href="https://www.linkedin.com/company/veloxpack/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
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

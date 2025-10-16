import Link from 'next/link';
import { ArrowRight, Play, Zap, Shield, Cloud, Code, Layers, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Veloxpack
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Media Processing Platform
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Kubernetes-native solution for scalable media processing workflows.
              Transcode, package, and deliver streaming content with enterprise-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/docs" className="group">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/docs/csi-driver-rclone" className="group">
                  <Play className="h-4 w-4" />
                  View Docs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Enterprise-Grade Media Processing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for scale, designed for developers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Kubernetes Native</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Custom Resource Definitions (CRDs) for declarative media workflow management.
                    Scale automatically with your cluster.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">High Performance</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Optimized for 4K/8K video processing with adaptive bitrate streaming.
                    Support for HLS, DASH, and live streaming.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Cloud Storage Integration</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    CSI Driver for seamless integration with S3, GCS, Azure Blob, and 40+ storage backends via Rclone.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Developer Friendly</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    YAML-based configuration with comprehensive examples.
                    Built-in monitoring, logging, and debugging tools.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Enterprise Security</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    End-to-end encryption, RBAC integration, and secure secret management.
                    SOC 2 compliant architecture.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Real-time Monitoring</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Built-in metrics, health checks, and observability.
                    Integration with Prometheus and Grafana.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Components Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Platform Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modular architecture for flexible media processing
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl">Core Operator</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Kubernetes operator for orchestrating media processing workflows.
                    Manages streaming jobs, encoding profiles, and workflow templates.
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">StreamingJob</Badge>
                  <Badge variant="secondary">EncodingProfile</Badge>
                  <Badge variant="secondary">WorkflowTemplate</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/docs/core-operator" className="group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl">CSI Driver Rclone</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Container Storage Interface driver for cloud storage integration.
                    Supports 40+ storage backends with dynamic provisioning.
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">S3 Compatible</Badge>
                  <Badge variant="secondary">Multi-tenant</Badge>
                  <Badge variant="secondary">VFS Cache</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/docs/csi-driver-rclone" className="group">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy Veloxpack in your Kubernetes cluster and start processing media at scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/docs/csi-driver-rclone/quick-start" className="group">
                Quick Start Guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="https://github.com/veloxpack" className="group">
                <Code className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

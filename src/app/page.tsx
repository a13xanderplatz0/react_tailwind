import { AuthButton } from '@/components/auth-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-secondary">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Google Auth Starter</CardTitle>
          <CardDescription>Sign in using your Google account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <p className="text-center text-muted-foreground">
            Click the button below to securely log in or view your profile if already signed in.
          </p>
          <AuthButton />
        </CardContent>
      </Card>
    </main>
  );
}

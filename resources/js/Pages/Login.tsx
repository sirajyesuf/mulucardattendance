import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export default function  LoginPage(){


  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isAuthenticated', 'true');
    }, 1000);
  }


  return (
    <div className='md:bg-white flex bg-[#f1f5ff] items-center justify-center text-[#4989d0]'>

<div className="min-h-screen flex items-center bg-[#f1f5ff] p-4 w-[500px]">

    <Card className='bg-white text-black w-full min-h-[500px] border-[#f1f5ff] flex flex-col  shadow-sm'>
      <CardHeader className='flex-1 flex flex-col'>
        <div className="space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-[#4989d0] text-center">AACACPVCC</h3>
        <CardTitle className="text-3xl font-bold text-center text-[#4989d0] ">Welcome back</CardTitle>
        </div>
        <CardDescription className="text-center text-base text-[#4989d0]">
          Enter your email and password to login
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-center pb-12">
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#4989d0]">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                // disabled={isLoading}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#4989d0]">Password</Label>
              <Input
                id="password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                // disabled={isLoading}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-lg transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <Button className="w-full h-11 text-base"  variant='addisababa'>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
            )} */}
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
    

    </div>


    <div className='hidden  w-full md:flex flex-col items-center justify-center'>
<img src="./aaappv.png" width={300} height={100}/>
      <h1 className='text-4xl text-center text-[#4989d0] font-extrabold'>
    The Addis Ababa City Administration Community Participation and Voluntarism Coordination Commission.
      </h1>
    </div>

    </div>

  )
}
'use client'
import Link from "next/link";
import {Button, Input} from "@mui/joy";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const [login, setLogin]  = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const loginAccount = () => {
    if(login === 'admin' && password === 'admin'){
      router.push('/admin')
    }
  }
  return (
    <main style={{display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: 30 }}>
        <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column'}}>
      <Input
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          color="primary"
          size="lg"
          variant="outlined"
          placeholder='Name'
          type={"text"}
          style={{marginBottom: 10}}
      />
      <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          color="primary"
          size="lg"
          variant="outlined"
          placeholder='Password'
          type={"password"}
          style={{marginBottom: 10}}
      />
    <Button
      color="success"
      onClick={() => loginAccount()}
      size="lg"
      variant="solid"
  >Login</Button>
        </div>
  <Link href={'/form'}>
    <Button
        color="neutral"
        size="lg"
        variant="solid"
    >Post form</Button>
  </Link></main>
  );
}

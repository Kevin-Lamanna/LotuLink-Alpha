"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage("Logged in!");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl mb-4">Login</h1>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">Login</Button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}

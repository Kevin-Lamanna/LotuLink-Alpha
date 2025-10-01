"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage("Check your email for confirmation link!");
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">Sign Up</Button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}

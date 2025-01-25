"use client";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { Resend } from "resend";
import { useState } from "react";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  company: z.string().min(2).max(50),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(5).max(500),
});

const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "vs@vandanasingh.in",
        subject: "Website Form Inquiry",
        html: `<p>Name: ${values.name}</p><p>Email: ${values.email}</p><p>Phone: ${values.phone}</p><p>Message: ${values.message}</p>`,
      });

      toast({
        title: "Email sent!",
        description: "We will get back to you soon!",
      });

      setLoading(false);
      form.reset();
      return response;
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to send email",
        variant: "destructive",
      });
      throw new Error("Failed to send email");
    }
  }

  return (
    <div className={cn("min-w-sm", `${className}`)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="John doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="John Doe Incorporated"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="john@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="+1 00000000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="We'd like some help with your services ..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2">
            {loading ? "Sending ..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;


'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const MotionButton = motion(Button);

export default function ContactPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you soon.",
        });
        form.reset();
    }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">Let's build together.</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="md:col-span-2"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ada Lovelace" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ada@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <MotionButton
                type="submit"
                size="lg"
                className="w-full"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Send Message
              </MotionButton>
            </form>
          </Form>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            className="space-y-6"
        >
            <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center"><Mail className="w-4 h-4 mr-2" /> Email</h3>
                <p className="text-gray-600">hello@daybreak.studio</p>
            </div>
            <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2" /> Based In</h3>
                <p className="text-gray-600">The Cloud, Everywhere</p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

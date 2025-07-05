'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

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
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-gray-800">Let's Create Something Great.</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Have a project in mind or just want to discuss the future of design? We're here to listen.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="md:col-span-2 bg-white/50 border border-gray-200/80 p-8 rounded-lg shadow-sm"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-medium text-gray-700">Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ada Lovelace" {...field} className="py-6"/>
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
                    <FormLabel className="text-md font-medium text-gray-700">Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ada@example.com" {...field} className="py-6" />
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
                    <FormLabel className="text-md font-medium text-gray-700">Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your project, your vision, your challenge..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button type="submit" size="lg" className="w-full py-7 text-lg">
                    Send Message <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className="space-y-8 pt-2"
        >
            <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2 flex items-center"><Mail className="w-5 h-5 mr-3 text-gray-500" /> Email</h3>
                <p className="text-lg text-gray-600">hello@daybreak.studio</p>
            </div>
            <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2 flex items-center"><MapPin className="w-5 h-5 mr-3 text-gray-500" /> Based In</h3>
                <p className="text-lg text-gray-600">The Cloud, Everywhere</p>
            </div>
             <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Start a Conversation</h3>
                <p className="text-lg text-gray-600">
                    We're always open to discussing new projects, creative ideas, or opportunities to be part of something visionary.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

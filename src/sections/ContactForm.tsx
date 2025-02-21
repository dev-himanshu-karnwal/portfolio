import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  emailjsPublicKey,
  emailjsServiceId,
  emailjsTemplateId,
} from "../constants";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isIconFlying, setIsIconFlying] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async () => {
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        formRef.current,
        emailjsPublicKey
      );

      setSubmitStatus("success");
      reset();
      setTimeout(() => setIsIconFlying(false), 1000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending message: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="input"
          />
          {errors.name && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="input"
          />
          {errors.email && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows={5}
            className="input resize-none "
          />
          {errors.message && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 relative overflow-hidden min-h-10"
        >
          {isSubmitting ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                y: isSubmitting ? [5, -5, 5] : 0, // Slight up-down animation
                opacity: 1,
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="absolute"
            >
              <Send size={20} />
            </motion.span>
          ) : submitStatus === "success" ? (
            <motion.span
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -100, opacity: 0 }} // Fly out of the button
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => {
                setIsIconFlying(true); // Trigger the reset after animation
              }}
              className="absolute"
            >
              <Send size={20} />
            </motion.span>
          ) : null}

          {!isIconFlying && !isSubmitting && <span>Send Message</span>}

          {isIconFlying && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }} // Delay before showing "Send Message"
              onAnimationComplete={() => setIsIconFlying(false)} // Reset state
            >
              Send Message
            </motion.span>
          )}
        </button>
        {submitStatus === "success" && (
          <p className="text-green-600 dark:text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 dark:text-red-400 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactForm;

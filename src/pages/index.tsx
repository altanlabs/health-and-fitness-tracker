import { motion } from "framer-motion";
import { ArrowRight, Droplet, Footprints, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Your Health & Fitness Tracker
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Stay Active, Stay Healthy
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Track your daily activities, steps, and hydration effortlessly.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/dashboard')}>
          View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Footprints className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Steps Tracker</h3>
              <p className="text-muted-foreground">
                Monitor your daily steps and stay on track with your fitness goals.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Droplet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Hydration Log</h3>
              <p className="text-muted-foreground">
                Keep track of your daily water intake to stay hydrated.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <CalendarDays className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold">Weekly Progress</h3>
              <p className="text-muted-foreground">
                View your weekly activity and progress with our calendar.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Activity Ring Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Daily Activity
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Visualize your daily activity with our intuitive activity ring.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="flex justify-center"
        >
          <Progress value={75} />
        </motion.div>
      </motion.section>

      {/* Calendar Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Weekly Calendar
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Check your weekly progress and plan your activities.
          </p>
          <div className="mt-6 flex justify-center">
            <Calendar className="w-full max-w-md bg-white rounded-lg shadow-md" />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Phone, 
  Mail, 
  ArrowRight,
  Stethoscope
} from "lucide-react";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      {/* Full Screen Background Photo */}
      <img
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
        alt="Professional Office Background"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

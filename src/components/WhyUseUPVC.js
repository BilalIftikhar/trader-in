// components/UPVCTests.tsx
import {
  FaWind,
  FaTools,
  FaVolumeMute,
  FaTemperatureLow,
} from "react-icons/fa";

const features = [
  {
    icon: <FaWind className="text-3xl text-blue-600" />,
    title: "Tested for Excellence",
    description:
      "Passed rigorous tests for wind, rain, insulation, durability, and usability — built for long-term trust and performance.",
  },
  {
    icon: <FaTools className="text-3xl text-green-600" />,
    title: "Exceptional Strength",
    description:
      "Engineered with Wintech technology, corners have superior strength and zero resistance loss for structural integrity.",
  },
  {
    icon: <FaVolumeMute className="text-3xl text-purple-600" />,
    title: "Superior Sound Insulation",
    description:
      "Multi-chamber profiles with static air tanks reduce external noise, offering you maximum peace and quiet indoors.",
  },
  {
    icon: <FaTemperatureLow className="text-3xl text-red-500" />,
    title: "Advanced Thermal Comfort",
    description:
      "Three- and five-chamber profiles with air channels and effective seals ensure excellent energy savings and comfort.",
  },
];

export default function WhyUseUPVC() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-14">Tested & Trusted Features</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 border p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
    title: string;
    description: string;
    url: string;
    image: string;
}

const caseStudies: CaseStudy[] = [
    {
        title: "Patch Consultancy",
        description: "Professional hospitality consultancy",
        url: "patchconsultancy.co.uk",
        image: "/images/casestudies/patch.webp"
    },
    {
        title: "Gigabyte Software",
        description: "Technology solutions platform",
        url: "gigabyte.software",
        image: "/images/casestudies/gigabyte.webp"
    },
    {
        title: "Vanderpump FX",
        description: "Forex services website",
        url: "vanderpumpfx.com",
        image: "/images/casestudies/vanderpumpfx.webp"
    }
];

export default function CaseStudies() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
                <CaseStudyView key={index} study={study} index={index} />
            ))}
        </div>
    );
}

function CaseStudyView({ study, index }: { study: CaseStudy, index: number }) {
    return (
        <a
            key={index}
            href={`https://${study.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <Card className="overflow-hidden">
                <div className='aspect-[16/10] relative'>
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <h4 className="font-semibold mb-2">{study.title}</h4>
                            <p className="text-sm">{study.description}</p>
                            <div className="mt-4 flex items-center justify-center">
                                <span>Visit Site</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>

            </Card>
        </a>
    );
}
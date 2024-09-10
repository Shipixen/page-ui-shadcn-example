'use client';
import Link from "next/link";
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shared/ui/carousel';
import Image from '@/components/shared/Image';
import { Button } from '@/components/shared/ui/button';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const exampleItems = [
  {
    imageSrc: 'https://picsum.photos/id/206/800/800',
    name: 'Amy Lawrence',
    location: 'Atlanta, GA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/33/800/800',
    name: 'Jane Doe',
    location: 'Los Angeles, CA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/59/800/800',
    name: 'Alice Doe',
    location: 'Chicago, IL',
    socials: [InstagramIcon, LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/71/800/800',
    name: 'Alex Woltman',
    location: 'San Francisco, CA',
    socials: [FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/89/800/800',
    name: 'John Smith',
    location: 'Seattle, WA',
    socials: [InstagramIcon, LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/95/800/800',
    name: 'Jane Smith',
    location: 'Portland, OR',
    socials: [FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/98/800/800',
    name: 'Alice Smith',
    location: 'Denver, CO',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/106/800/800',
    name: 'Alex Doe',
    location: 'Austin, TX',
    socials: [InstagramIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/110/800/800',
    name: 'John Woltman',
    location: 'Houston, TX',
    socials: [FacebookIcon, LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/112/800/800',
    name: 'Brian King',
    location: 'Miami, FL',
    socials: [InstagramIcon, FacebookIcon, LinkedinIcon],
  },

  {
    imageSrc: 'https://picsum.photos/id/253/800/800',
    name: 'Chris Johnson',
    location: 'Boston, MA',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/701/800/800',
    name: 'Sarah Miller',
    location: 'Philadelphia, PA',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/15/800/800',
    name: 'John Doe',
    location: 'New York, NY',
    socials: [InstagramIcon, FacebookIcon],
  },
];
import { colors } from '@/data/config/colors';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 35"
    className={className}
  >
    <path
      d="M17.377 12.311c-.881.042-1.788-.07-2.556-.452-.768-.38-1.378-1.058-1.485-1.836-.106-.774.362-1.62 1.181-1.914.817-.293 1.898.104 2.134.856-.01-.714-.01-1.465.367-2.095.378-.629 1.278-1.074 2.01-.774.51.21.795.723.84 1.22.042.497-.11.99-.265 1.471.155-.81 1.304-1.275 2.162-.965.859.31 1.327 1.207 1.214 2.02-.113.814-.72 1.527-1.472 2.004a4.787 4.787 0 0 1-4.13.465Z"
      fill="#FBB18C"
      className="animate-wiggle "
    />
    <path
      d="M10.739 33.484c-2.02-1.413-3.343-3.246-4.315-5.125-1.455-2.82-2.188-5.889-1.387-8.835.8-2.946 3.278-5.75 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.679 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.447-3.389-.317-6.845-.265-11.343-.32Z"
      fill="#CAD61B"
    />
    <mask
      id="a"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M12.888 10.472c-6.248 7.858-6.283 18.717-.087 26.6"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="b"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#b)">
      <path
        d="M22.082 9.862c3.253 8.342 2.54 17.675-1.959 25.62"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="c"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#c)">
      <path
        d="M16.67 9.656c-3.73 8.164-4.476 17.225-2.113 25.726"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <mask
      id="d"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="11"
      width="24"
      height="23"
    >
      <path
        d="M10.739 33.484c-2.02-1.414-3.343-3.247-4.315-5.125-1.455-2.82-2.188-5.89-1.387-8.835.8-2.947 3.278-5.751 7.06-7.17 3.782-1.42 8.875-1.214 12.008.835 1.71 1.12 2.74 2.678 3.195 4.282.452 1.604.361 3.263.087 4.886-.68 4.008-2.494 7.92-5.305 11.446-3.389-.316-6.845-.264-11.343-.32Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#d)">
      <path
        d="M18.183 8.633A87.576 87.576 0 0 1 16.45 37.72"
        stroke="#A9B136"
        strokeWidth="1"
        strokeMiterlimit="10"
      />
    </g>
    <path
      d="M4 33.58a4 4 0 0 1 4-4h16.316a4 4 0 0 1 4 4V34H4v-.42Z"
      fill="#BB712C"
    />
    <path fill="#92541B" d="M0 34h32v1H0z" />
  </svg>
);
  const avatarItems = [
    {
      imageSrc: 'https://picsum.photos/id/64/100/100',
      name: 'John Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/65/100/100',
      name: 'Jane Doe',
    },
    {
      imageSrc: 'https://picsum.photos/id/669/100/100',
      name: 'Alice Doe',
    },
  ];

export default function PageUI() {
  return (
    <>
      <div className="flex gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground font-bold"
        >
          Go to Shadcn UI example
        </Link>

      </div>

  <LandingPrimaryVideoCtaSection
        title="Beautiful Garden Designs in Minutes"
        description="AI-powered garden design and landscaping. Tailored for your region."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        variant="secondary"
        leadingComponent={
          <div className="flex items-center">
            <LogoIcon className="h-24 w-auto" />
          </div>
        }
      >
        <div className="w-full mt-6 flex flex-col justify-center gap-4">
          <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
            <a href="#">Try Gnomie for free</a>
          </Button>
          <p className="text-sm opacity-50">No credit card required</p>
        </div>
      </LandingPrimaryVideoCtaSection>

            <div className="flex flex-col items-center p-4 mt-12">
        <h2 className="text-5xl font-semibold leading-tight text-center">
          Made with Gnomie
        </h2>
        <p className="mt-4 md:text-xl max-w-xl text-center">
          Thousands of people use Gnomie to reimagine their outdoor spaces,
          adding plants, flowers, and landscaping elements suited to their
          specific climate.
        </p>
      </div>

      <Carousel
        className="w-full py-12"
        opts={{ dragFree: true, dragThreshold: 0.5 }}
      >
        <CarouselContent className="ml-0">
          {exampleItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 2xl:basis/1/5 3xl:basis-1/6 p-0 ml-1"
            >
              <div className="w-full flex flex-col">
                <Image
                  src={`${item.imageSrc}`}
                  alt={`${item.name}`}
                  width={500}
                  height={500}
                  className="object-cover rounded-xl"
                />

                <div className="p-4 flex gap-4 justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-50">{item.location}</p>
                  </div>

                  <div className="flex gap-2">
                    {item.socials.map((SocialIcon, index) => (
                      <div
                        key={index}
                        className="bg-neutral-100 dark:bg-neutral-900 rounded-full w-10 h-10 p-2"
                      >
                        <SocialIcon size={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}

          <CarouselItem key="cta" className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-secondary-500/5 rounded-xl">
              <Button
                size="xl"
                className="p-7 text-xl"
                variant="secondary"
                asChild
              >
                <a href="#">Try Gnomie for free</a>
              </Button>

              <p className="text-sm opacity-50">No credit card required</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>

      {/* Background gradient */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
    </>
  );
}

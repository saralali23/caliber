import { ServicesList } from "./service-list";

export const Services = () => {
  return (
    <section className="w-full h-full mt-16">
      <div>
        <h3 className="text-4xl font-bold text-center">Services</h3>
      </div>
      <ServicesList />
    </section>
  );
};

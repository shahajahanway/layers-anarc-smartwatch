import { ScrollReveal } from "../components/ScrollReveal"
import { ParticleBackground } from "../components/ParticleBackground"
import { Timeline } from "../components/Timeline";
import { Users, Award, Globe, Heart, Target, Zap } from "lucide-react"

const milestones = [
  {
    year: "2023",
    title: "The Breakthrough Launch",
    description: "Anarc sells ₹3 Cr in 24 hours, over 1M site visits and 4M+ YouTube views.",
    icon: Zap,
  },
  {
    year: "2024",
    title: "Refining the Experience",
    description: "OTA updates and support improvements based on user feedback.",
    icon: Heart,
  },
  {
    year: "2025",
    title: "Scaling Up",
    description: "India’s top creator-led smartwatch brand. Exploring global markets.",
    icon: Globe,
  },
]

const team = [
  {
    name: "Neel Gogia",
    role: "Co-Founder",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEBIVFRAQEBUXFRUPEBUPDxUQFRUWFhUVFRUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQFy0lICUtLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLSstLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD0QAAEDAgQDBgMHAQcFAAAAAAEAAhEDIQQSMUEFUWEGEyJxgZEyobEUQlLB0eHw8RUWIzNicoIHJFOSov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACMRAQEAAgMBAQEAAgMBAAAAAAABAhEDITESQQQiUTJCYRP/2gAMAwEAAhEDEQA/APLEoXJQornAJwSBOASMoUjAmAKWmEjHeGNsiQagVLitGkPG6/Jokp1PtTSOlOp65R+a2hfR4NSgIP8A3iZ/4nnyLD9HJn96KQMGnUHo0/Qo1S2PAJYVLBcWo1fgeJ5O8LvYq+1IOhOhdCcAgyZV2VOASwkDcqaWqSFxCAgc1McFYLVG5qYQOaqWMbZESFSxgsmJ6BvF1PhRdR1BdT4QXSil8XQ1dlUgC6FtJiwnALgE4BTWcAnALgnBI3OIAk6BUKnEW9Y6fqq/EMUXOyg+EcufVUpVMcf2p5ZfggccPwD1BJ+oUZrk7D2t85VYQnDRaYkS990V1vEBkyuBkaEAH35ocXJMw5IF7EaWIDjex2ixlH+HcfdSIZXuw6O+8PPmOqyTYVum8kBjtAd9vI8lmtSR6jTdInY/RSBBezGKBotYT42CIOsA2PtARwBYI2E4NTgEoCAblSQpISEICMtUbmqxCY4ICu5qo40WRNzVQxwsmc9AagurGEbdR1BdWMILpRTLxeAXQpAEkKiLEBOAXAJwCmuSEP4liTORp2v+iv1XBrSTaBrE/JAKjySTuStYxjO6S0qDSLug/L1KWngib7dbHzjZS4WhDc7vQfmrDHFxk2AGkWjyVUdmM4aPxD1MBWG8LbF5BH4fED1CjFcOcBByjYBEeISyADIj8WU87hJm7Dzw1uxJ6ZTKq18IAYH/ANWVipjKhsHGPl+6r1GHUyZ5zdFamzGUjNjPyRGnhbS62sEag8uoOo8kzCMgXMzItqOqu4bB1ax8DTqNNP5aVPKr4xJg8W6nVbl1DgSBvsR5eJehMWXd2bfhmNrvaczajcwP4SYB9/qFqmqeOUynQ5cLjeyhLC4BPAWkzYSEJ6QpGZCaQpE0phEVQx+iJEKhjxZBz0BeLqzgwoXi6tYMJRTLxdAXQnwkhUQYcBKEgTgsLo8Q2WkbEIHSCM4vENaIJuUEHIbreCeYh3pcw/hsB/P5omOBLQxs+JxJiZyi1/5srtINDQD8JuPX9yhJfFSxMC0i1v6qiQvhMO2iMzyC4RAmSo+I8R7wyLdAYA9FSa/M+4kclt+zXB8LUyipSa6epB9wdAsZZfM2JO2RwVEOudG3P9UX4VwTEY54bSYRSYIc8tIY0az8zbXX09cwPZThoAP2WmSN3AvM+pv6otWDWNDKbQ1g0DQA0DyFly5/07nS2PHqsRR7L4amwMyyQLuIuTzKK8LwNJkANAjTmpsZqkoMdyXDnnlfa9Hhxnohxyi2rh3N3LY+VlmqLYaAdYC0raBLJOyz7xBIOxVv5Mu7E/7cesaQBOCa0hPBXa88kJIT1yDMhNIUiQoCIhUMeLIkUP4hohqegTxdWsEFXeLq1gwiN5eL8JsKSE2FtFhAnBIAnBZWB+J1wXFhGkQdCCqTgRY6ohxZrZn79vZU6lTYi491XHxHL001ja+gj0TCbhFOG8Br4hpdSAcGhxIzgEZMpdr0cCrfCezOIxNQU2syg/fIPdiLHxaE9Alc5DmFoZgaRc4Nbq4wLble19kuyzaNNrqkmo4SZJGt/wCBAuw/ZinRxL+8bL6LiGl197OA09V6WwWXH/Ry7vzG+PH9rqVEaAKepgszSN4QHivEazLU3NHMmnnPpePks1xTjHFXMIZXaGHc0xTPyClhhL7WsrfyNBiqYBglW8G6mBcj3XkGK4njmEA1sxe7KABmLnHl7rX8H4FxN0PqloaYtNx5j91jk4ZJvbq4eXvVjWv41h6LXOqEBrQSZNrLC4vtAK9Z9VrclN0ZQbG1iSOtkDwDq2IxJdUplzWOJ7sw6HNkw5t7iNxqp+7LvFzv7q3Dx/F/9HPl9QVbxFSN4ghTaJTxSKvuub5gqOIJwx4QjuyuyFGx8wZGOCX7aEFAKW6Nj4gz9sCq4quCFQukMo2Pk16nwzoUBSSiHYKd+E3vwhbqhTe8K3tP4AQnJAkebIMOxr2l4G8ajWFF3LYLh90b6kpzsPL8zY/9oHmurgZSM0kaxpyiVXHSOe2q/wCndRoe6jUPhxLcrR94vyPDgOpaZ82tC9IwBdhqNJlZuZlA5WGkCZJmHPA+GZPNeC06jpY4EhzDLS0+IEGQR1svYOynbbD4trKOILmYlv4ZLKmUXcI0JnT2lQ58L/yinHl1qtAKg+0FwH+YyR73HyRrCVZjkVmcRjGuIq0w9ga9zAKjC10A/FDoMHZX+HY8O01G36dFx543qty96G+I8Ka6mTrZeb8d4diGyKdTwfhMR8wvRu/c4RKHYvAA3N49kpnq9NSf7YLst2Xr1cSzEVj/AJR8AIsbagcr/Reu06JAh2hEdFm8PixRcDzsBojrsZUeRlYS3m0Ep5ZfXpzHVDa+EFMveMtiQSGgOPWeqxf2QLf8UpucHtNnPpEjaS0GPzWKC3/Njq5Nf0clymKuMGEv2IK0E4BdTl3VP7CE04EIhCRB7oacCmnAomQmkIP6oWcEq2Iw8I4Qh+P0Sp45XYK4J9OnKa7VWKDrJRSqdZsKJTYgyVDCYAwlSBOW2APHCKhDLc9h1TabxbNeTp0/JEsZgs7g4RI1ndUatDu3EuIIPL4vRUlSyhzqTPE5pdAiNo/ou4Zin06zarIztMw7Q7EHzlRBxuWmByOsaJMETnnWBPNas2n49kwfHKWNoZ6fhrU8oq03Wc12x6gib9FJSq5XNdoJjly1Hp815hSxlalUbiWeG0dHj7wcOR/da7D8aZWph7eQDm/fa68abX13+S5c+H588bme2/wmOGhN/YfsrdWpusTheKtNwYdbeBG58kS/tnw7n03C5MuOzxfHNNja9MVJe4WEAeaq8S4uGiaIe58fD3j8tt8oIQr+zateo6q9+Vg+FoAJceZJ0AUFR7KTpq1apImMtTJHIAMAVMcJpvHeV91F/C8SrVXMNQObmYXZQ45dxJm/JXQElGqH02uDS0G4zElxHNxNyT+ScFXhnW9F/TqZfMvhQngpgTgqOc5cUi5BkXFS18O9gBcIDtDsVASlLLNw7LLqkKHcQ0RAlDuIGyZ4+g7kgdC5ybKysRyYnOTUACCeo2qQKiarxGoWstqTCDuJIgn3RTirxDRvM+mn5oaVTHxLP1G0RaSFawdXu3XHhd8x5qDuymli2xZtozXY+k5nqJ2KCU8Q+m7MxxBHLQjkRuOibhcQaZ8QJYdQNR1aefRNr3uLg6EfyxRe2ZNVouF8ZzCwArCLSQ1wH4f0Wi4Xx2mG5awjmXDXn5rzrD0yXCNRflp1W44XhszW3zNdpmF+oPVcnNJj66uHjufjcYOpSqMljxlItBlD8QzDtdnc0OLdyVRp8PoHM2n4HMcQTSdkOYazFj6hdT4DTJmpUqPjZzg1tueUCVOcO5vbX/0uGWv9C9LE94MwENFmxyH7ynwkptAAAEAaAWACeFXGfM1Es8rllcqQBOASgJQE2SQrGDwjnugDS58k7B4UvcNhNyjvD8O1gfH49fafmufm5P8ArF+PHX+St2hbFFgAsXnS8QIQCrQc2C5pAdpI1WlcyaniNhoFHjoqUjTJgh4c3lyPyPyUuLk+JMfxTOTkts9Zgodj9Ed4ngDSy+IOa8SCBGliCEC4houyZTKbiGrMtUGempz0xJUhTUpSIAEE5zw0EnQBNCH8VraMHmfyCrJtK1Uq1i5xcdT8hsFNQDBdxuqBC6FWdI2bXqtUbKPVVCkzI2WhFlIj1H6KGthYu2B02/ZQCqkD+p+qBqjPCKOb01G/n1C03CcWaMNiWZpkG8biOfVZLhTqjXZm3G/l+i0dKi2p4s0Dcb+SlnjL1XRx5XHuelfiH4PGGq92bDYp7nZ2/DczPRzZghbWnUBEgggiQRoQdCOixHF2PdhzTAkNeKmUiYIBbLTtIMdbKLs12iNMik5oybEHxAJSdFn69BaVK0qtQqhwDmmQVO1KppglTWpyRrlGq9tM5dSTlnc6I3hhDAN4v1KCUMQ2A10At5opTxbI+Iac1wZ7+q6PyHVdbbKlrqp31QZuPdQF0fsst4Q6WuEVGhzRMTMidQCsx2lw7adVzGzlEETqJAMHylazDUs5A/qsd2jrZqrzM+IgHoLD5BW4Lfqnyz/GWs+9NJSuKaV0pklImkpJQQGEGxlTM8nbQeQsiWLq5WE7mw8ygxV8UcqQpCUqjJWmClNKUlcmRq5SBk6JHUiNkA+jiXN+Ewdv5yRzhuPFQxOWqdphj/LkVnVwSs2cum2p40gw6QW2IOyAVsUS4+FsNdLXAQ7LyJ3F1Y4djmVgKVcw8CGVZgkfgeeXIqPH4Q0n5S0hpkX/ABDY+hWNKW7jfdkKpdhw7m4/Ky0DCvP+yXEsn+Hs36c1sqeMCzWbBNpTlSZigpW4gLJ6C+1zKncd5SJBpnxZdchsT6W+awv9sYgaVXe69D45iw3DVXDXu3AeZED6rzF2URnsDoXSASIkTpNxbqFmxbDzsdwfF8VJ/wARxGQG/NarB4nEugE2ZTbJjV51HustwZ7H1mBr2AdXiCdgvUuG4VtOgXvjKN9lycuevx3cXHje1XA8QfSoPq1DBgho/wBZsP19FjMTXLiiHGuImocrbU26DruT1QkhW4sPmd/rn5spll15DCmlPITCFVJGUkpXBNhBMjxCpLsuzfqVUKc50knmU0roc5jimJXJEyckSrkyc0olhHB1ihinw9SClTlE63Cs3w6oPVpFpghanhlcFW+K8Kp1GSLH81nem7jvxiQtFg+IfaKJwtQjvfCaTnbvbo0nYwSAescoAV6JY4tdqE1pWrNsS6GsI406gLpaDrztYjzWowWNzAxYDQdFm6tbvcPnN3scJO5tqfMD5K1wLGSYOsKeU6VxrTsrlTsxJQ8FStcpKK3anFnuMk/G4D+esKn2e4HiK2BxVSnVpCnUHwVAHPhrz8JLh3ZJja8BQ9pqhJptAsJJ5dPogdHFFlCrRGcGq5pBFUtaA2cwLAIdMi8iIVeNLknYp2M+zZ39/QdiKlRrmhuXwsqOOVkvJjxF3xGII3laLhnaKoMLSwT9M1R4Lql2sbUqUmUuToNN2h5LG0cQz7M6gGuz1A0Eta0NdleXgkzMgujTQDkp3VGudhqbZhvdtNrSHE1AI18TnGRz5p5yZFhbGwcoynvdJJOpM+6aVB0IykKcQmpkY5MTykhBMEUhSEpJXS5zSkXFImyVckXIDkrSmpQgCOBxMFanhmJa6z9D9ViqT4RXC4ofCN93GB+Z+SxYpjkf2qY7POVobsWX90BC1b+C0DTz9+5zz91jMrB/ycST7BZrFUcjoTxpZT9TYOuBII1GoJEHyWl4FSp93naBmkg85WPBRvszi8tQ0zo/T/cL/qllOhje2rCeFEF1SplaXH7oJ9lFdnu0GMJq5REMEep1Q+i/MYI9Qoq1TM5zuZVrhVOXFp3FlT5mkvq7aHs3wRlWo3NdkidYKL47h9GniappsDfFltsG2gctFmsHjq+Gf3tJ0Qbj4mmNiDr/ACCFfpdom1Xk1fC97iSR8Ekz5j+XUPjL63vp03kwuEmtUTSFIHAiRcHcXC4lNhxTSuJSSmDSkXFJKCefuTZUtdkKErpjmrlyauTIsLki5AcuXLkAoKt4SJEqopKboSONZSrAWAmyHcYwhy5i0jlZCRWedCQiuCxVdgyk5mO1a8ZmlZ1pvewBSUKha4OGoII80R4vgWtOanadWnY9ELC16xZp6BQqhzQ4aOEqh2hr5aOWYLyB1gXP86qThBHcty6RvzWe43ixUrGNGeEXtY3PupSdq5ZdKYsr1F5aQRr+SogHZWGVrjPaOS3U402JoB9IELN1mlr+i0GDxE02tF5MWTOP4IU6YqEaugecSsS66Vym5sLwvEKlM+B1t2m7fZajCYkVGB4ESLjkd77rHUBmk6EEW5gyJHlb3WvwbMtNg5MHvF0sxhUxKSV0pFhQhKRcUkoJiX3CqvEK0+x6H6qKq1dEc9QSkXFctMuSlIuQHJUiUIDk6bJpSICeg68onhsT4xyCDtKs0H3SsalaTG4bvQXAgDqszjsOWnmDyRb7aAyFVxLf+3bUP3qrmjyABP1CzGstVb4PjQ2i/MYygkee35IG0bri6GlvMgrmcinpi3aXKYzDQaxqOvkrNDFNjK8SOY1CbTz0nB8S2J5tcw6pOIUAx/h+B4Dm/wC07emiDWMNXyO8Dv55fp7LYUK2HxdI0HkMqGLOOp2LSsA0wieCxktykCR8JOrTzH6dVnLFvDLQi7guSqaQd8J8RmSOXrY+yMNsI5BU+G0yGS4yXmZIgxtby+qtSp2qQ8lICmyklZM8pE2V0oDG4gW8jKjOisVQoG6K8QqtUCYpnhRLUZpFy5cmTkqRcgOSpEpQCKSm6FGlQErqk2RHihijRZsxhP8AyeZPyDUKaVd4q+4AOwPysk1PFNzbjqP59EoGxt56KfGsgUutEH3e9OwQa6WP0Oh3B5j9EFoQ4M8OnD1BDrmnOub71P1Fx1HVV8YzwFh1put/tOyTEUnBoBtVpAFj2/fpA29W7dLbBXH1BWpmqPjiKgH4vxDodVlv80CtRLhVHM7LzIny1PyHzQ5ov5I/2co2dUO+n5/l7oyvRYzsbhculISoLuJSSkK5MOlJKRcgmWcVEBcqV2/r9FFv6BViVQvCheFO9QPW4xTVy5cmTly5cgOXLlyAVcuXIDkpMmSkK4ICzjHSKZ27oD1bMrmNLTfQifTYhRPeSxo2DnR65VZqGaVMnUZh6A6JGkfWkAcjbyUWDrFj/wDS6x8kxqQpHtapYJ1V4ZTEve+A0DxOPT5+y1zeHuoNFN7SCBuLE7pOwNMNfUeB44aJ1MESQOS9FdTa9sPAdbcLi5v6Ljl866eh/P8AyTPD63287hJC0nFMBSBswDyJCAVWgaLeGcynSfJxXC6qKEmVOK5bTMISJxTUB//Z",
    bio: "Growth strategist behind India’s leading creator-led brands and co-founder of Layers.",
  },
  {
    name: "Shlok Srivastava",
    role: "Co-Founder (Tech Burner)",
    image: "https://www.layers.shop/cdn/shop/files/gallery_img4.webp?v=1725254041",
    bio: "Popular tech creator and entrepreneur who redefined product launches via content.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Creator-Led Trust",
    description: "We build community-first, using creator insight to power product vision.",
  },
  {
    icon: Award,
    title: "Design-Driven",
    description: "Our octagonal design broke convention — made for style + substance.",
  },
  {
    icon: Users,
    title: "Made for India",
    description: "Built to match the climate, preferences, and expectations of Indian users.",
  },
  {
    icon: Globe,
    title: "Scalable Innovation",
    description: "From ₹0 to crores — built to scale fast, without compromising experience.",
  },
]

export function About() {
  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />

      <section className="py-20 relative overflow-hidden">
        <div className="slime-blob absolute top-0 right-0 w-96 h-96 opacity-20"></div>
        <div className="slime-blob absolute bottom-0 left-0 w-64 h-64 opacity-15"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="gradient-text">Anarc</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are India's first creator-led wearable brand, born to blend bold design and top tech.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">The Origin</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    The Anarc smartwatch launched in 2023 with explosive momentum: ₹3 crore in 24-hour sales, 1M+ website visits, and 4M YouTube views — all powered by community.
                  </p>
                  <p>
                    Built by <strong>Layers</strong>, a startup co-founded by Neel Gogia and Shlok Srivastava (Tech Burner), Anarc disrupted the smartwatch category through creator-led marketing and intentional design.
                  </p>
                  <p>
                    Developed with global design studios like Thought Over Design and Seymourpowell, its iconic octagonal shape, AMOLED display, and HiSilicon chipset offered the perfect balance of power and flair.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="morphing-blob absolute -top-10 -right-10 w-64 h-64 opacity-30"></div>
                <img
                  src="/png/logo.png"
                  alt="Anarc Smartwatch"
                  className="rounded-3xl glass-effect p-4"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              What drives us to build smarter wearables, faster.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Milestones</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The key moments that shaped Anarc
            </p>
          </ScrollReveal>

          <Timeline milestones={milestones} />
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Founders</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The creators behind India's boldest wearable launch
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="text-center glass-effect rounded-3xl p-8 hover:scale-105 transition-transform">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">The Revolution Continues</h2>
              <p className="text-xl text-gray-400 mb-8">
                Discover Anarc. Experience India’s smartest smartwatch.
              </p>
              
              <button className="liquid-button px-12 py-4 rounded-full font-semibold text-lg">Explore Products</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

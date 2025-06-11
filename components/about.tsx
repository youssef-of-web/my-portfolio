import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="container py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                  make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enjoying a good cup of coffee while reading about the latest in web development.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Frontend Development (React, Next.js, TypeScript)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Backend Development (Node.js, Python, PostgreSQL)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>UI/UX Design & Prototyping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Cloud Architecture & DevOps</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

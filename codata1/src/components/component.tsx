import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function Component() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MountainIcon className="w-6 h-6" />
            <h1 className="text-xl font-bold">COVID Detector</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href= "/gallery" className="text-sm font-medium hover:underline" prefetch={false}>
              Visualisation
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Check Your Symptoms</CardTitle>
              <CardDescription>Answer a few questions to determine your potential COVID-19 risk.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
  <div className="grid gap-4">
    <div className="grid gap-2">
      <Label htmlFor="name">What is your name?</Label>
      <input type="text" id="name" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="age">What is your age?</Label>
      <input type="number" id="age" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="city">In which city do you live?</Label>
      <input type="text" id="city" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="breathing-problem">Are you experiencing breathing problems?</Label>
      <Select id="breathing-problem">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="fever">Do you have a fever?</Label>
      <Select id="fever">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="dry-cough">Do you have a dry cough?</Label>
      <Select id="dry-cough">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="sore-throat">Do you have a sore throat?</Label>
      <Select id="sore-throat">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="running-nose">Do you have a running nose?</Label>
      <Select id="running-nose">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="asthma">Do you have asthma?</Label>
      <Select id="asthma">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="chronic-lung-disease">Do you have chronic lung disease?</Label>
      <Select id="chronic-lung-disease">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="headache">Do you have a headache?</Label>
      <Select id="headache">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="heart-disease">Do you have heart disease?</Label>
      <Select id="heart-disease">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="diabetes">Do you have diabetes?</Label>
      <Select id="diabetes">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="hypertension">Do you have hypertension?</Label>
      <Select id="hypertension">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="fatigue">Are you experiencing fatigue?</Label>
      <Select id="fatigue">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="gastrointestinal">Are you experiencing gastrointestinal issues?</Label>
      <Select id="gastrointestinal">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="abroad-travel">Have you traveled abroad recently?</Label>
      <Select id="abroad-travel">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="contact-covid-patient">Have you been in contact with a confirmed COVID-19 patient?</Label>
      <Select id="contact-covid-patient">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="attended-large-gathering">Have you attended any large gatherings recently?</Label>
      <Select id="attended-large-gathering">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="visited-public-exposed-places">Have you visited any public exposed places recently?</Label>
      <Select id="visited-public-exposed-places">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="family-working-public-exposed-places">Does any family member work in public exposed places?</Label>
      <Select id="family-working-public-exposed-places">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="wearing-masks">Are you wearing masks properly in public places?</Label>
      <Select id="wearing-masks">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="sanitization-from-market">Do you sanitize your groceries from the market?</Label>
      <Select id="sanitization-from-market">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</CardContent>

            <CardFooter>
              <Button type="submit" className="w-full">
                Check Symptoms
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <section className="bg-muted py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Your COVID-19 Risk</h2>
            <p className="text-muted-foreground">
              Based on the symptoms you reported, your potential COVID-19 risk is:
            </p>
          </div>
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <TriangleAlertIcon className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">Moderate Risk</h3>
                  <p className="text-muted-foreground">
                    You may have COVID-19 based on your reported symptoms. It's important to self-isolate and contact
                    your healthcare provider for further guidance and testing.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Next Steps:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <CircleCheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                    Self-isolate at home and avoid contact with others
                  </li>
                  <li>
                    <CircleCheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                    Contact your healthcare provider for medical advice and potential testing
                  </li>
                  <li>
                    <CircleCheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                    Monitor your symptoms and seek emergency care if you experience severe symptoms
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="bg-muted py-6 px-4 md:px-6 border-t">
        <div className="max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            This tool is for informational purposes only and does not replace medical advice. If you have concerns about
            your health, please contact a healthcare provider.
          </p>
        </div>
      </footer>
    </div>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

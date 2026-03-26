import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-2 rounded-lg border border-fuchsia-600 bg-fuchsia-600 p-2 sm:flex-row sm:items-center">
      <Input
        type="email"
        placeholder="Your email address..."
        className="h-10 border-transparent bg-transparent px-3 text-sm text-fuchsia-100 placeholder:text-fuchsia-200/70 focus-visible:border-fuchsia-300 focus-visible:ring-fuchsia-300/30"
      />
      <Button
        type="submit"
        className="h-10 rounded-md border border-fuchsia-200/70 bg-neutral-50 px-5 text-sm font-semibold text-fuchsia-700 hover:bg-white"
      >
        Subscribe
      </Button>
    </form>
  )
}

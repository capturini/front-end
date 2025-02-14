import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera } from "lucide-react"

const ProductDetection = () => {
  const [image, setImage] = useState<File | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!image) return

    const formData = new FormData()
    formData.append("image", image)

    try {
      const response = await fetch("/api/detect-products", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      console.log("Detected products:", data)
      // Handle the response data (e.g., update state, show results)
    } catch (error) {
      console.error("Error detecting products:", error)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input type="file" accept="image/*" onChange={handleImageUpload} className="flex-grow" />
        <Button onClick={handleSubmit} disabled={!image}>
          <Camera className="mr-2 h-4 w-4" /> Detect
        </Button>
      </div>
      {image && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">Selected image: {image.name}</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetection


// File: pages/api/submitForm.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const { name, email, message } = req.body;
  
      const payload = {
        access_key: process.env.WEB_FORMS_3_API_KEY,
        subject: `${name} sent a message from HAC`,
        from_name: "HAC Organization",
        botcheck: false,
        name,
        email,
        message,
      };
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
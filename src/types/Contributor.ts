import React from "react";

export type Contributor = {
  name: string;
  slug: string;
  description?: string;
  additionalSections: {
    name: string;
    content: React.ReactNode;
  }[];
  socialLinks?: {
    name: string;
    url: string;
  }[];
};

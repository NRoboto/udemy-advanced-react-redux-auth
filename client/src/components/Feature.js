import React from "react";
import { requireAuth } from "./requireAuth";

const FeatureComponent = () => <div>This is the feature!</div>;

export const Feature = requireAuth(FeatureComponent);

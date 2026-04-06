"use client";

import { useEffect, useState } from "react";

type Installation = {
  id: number;
  numeroClient: string;
  installation: string;
  gain: number;
  notes: string;
};

export default function Page() {
  const [numeroClient, setNumeroClient] = useState("");
  const [installation, setInstallation] = useState("START");
  const [gain, setGain] = useState("");
  const [notes, setNotes] = useState("");
  const [installations, setInstallations] = useState<Installation[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("installationsHorsdep");
    if (data) {
      setInstallations(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("installationsHorsdep", JSON.stringify(installations));
  }, [installations]);

  function ajouterInstallation() {
    if (!numeroClient.trim() || !gain.trim()) return;

    const nouvelleInstallation: Installation = {
      id: Date.now(),
      numeroClient: numeroClient.trim(),
      installation: installation.trim(),
      gain: Number(gain),
      notes: notes.trim(),
    };

    setInstallations([nouvelleInstallation, ...installations]);

    setNumeroClient("");
    setInstallation("START");
    setGain("");
    setNotes("");
  }

  const

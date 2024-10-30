"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/shared/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function AjouterArgent() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour traiter le virement
    alert("Virement en cours de traitement...");
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour traiter le paiement par carte
    try {
      // Votre logique ici
      // En cas de succès, vous pouvez réinitialiser le message d'erreur
      setErrorMessage("");
    } catch (error) {
      // En cas d'erreur, afficher le message
      handleError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    }
    alert("Paiement par carte en cours de traitement...");
  };

  const findNearestATM = () => {
    // Logique pour trouver le distributeur le plus proche
    alert("Recherche des distributeurs à proximité...");
  };

  // Exemple de fonction pour gérer une erreur
  const handleError = (error: string) => {
    setErrorMessage(error);
    // Option: Effacer le message d'erreur après un certain délai
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Ajouter de l'argent sur votre compte
      </h1>
      {/* Affichage du message d'erreur s'il existe */}
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Choisissez votre méthode de dépôt</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="virement className=w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="virement">Virement</TabsTrigger>
              <TabsTrigger value="carte">Carte bancaire</TabsTrigger>
              <TabsTrigger value="especes">Espèces</TabsTrigger>
            </TabsList>
            <TabsContent value="virement">
              <form onSubmit={handleTransferSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="amount">Montant (€)</Label>
                  <Input
                    type="number"
                    id="amount"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sourceBank">Banque source</Label>
                  <Input type="text" id="sourceBank" required />
                </div>
                <div>
                  <Label htmlFor="iban">IBAN</Label>
                  <Input type="text" id="iban" required />
                </div>
                <Button type="submit">Effectuer le virement</Button>
              </form>
            </TabsContent>
            <TabsContent value="carte">
              <form onSubmit={handleCardSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cardAmount">Montant (€)</Label>
                  <Input
                    type="number"
                    id="cardAmount"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Numéro de carte</Label>
                  <Input type="text" id="cardNumber" maxLength={16} required />
                </div>
                <div>
                  <Label htmlFor="expiryDate">Date d'expiration</Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input type="text" id="cvv" maxLength={3} required />
                </div>
                <Button type="submit">Payer par carte</Button>
              </form>
            </TabsContent>
            <TabsContent value="especes">
              <p className="mb-4">
                Pour déposer des espèces, rendez-vous dans l'une de nos agences
                ou utilisez nos distributeurs automatiques.
              </p>
              <Button onClick={findNearestATM}>
                Trouver le distributeur le plus proche
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

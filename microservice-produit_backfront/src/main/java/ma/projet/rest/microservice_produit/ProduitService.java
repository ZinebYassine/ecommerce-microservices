package ma.projet.rest.microservice_produit;

import ma.projet.rest.microservice_produit.Produit;
import ma.projet.rest.microservice_produit.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService {

    private final ProduitRepository produitRepository;

    @Autowired
    public ProduitService(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    // Méthode pour obtenir tous les produits
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    // Méthode pour obtenir un produit par son ID
    public Optional<Produit> getProduitById(Long id) {
        return produitRepository.findById(id);
    }

    // Méthode pour ajouter un nouveau produit
    public Produit addProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    // Méthode pour mettre à jour un produit existant
    public Produit updateProduit(Long id, Produit produit) {
        if (produitRepository.existsById(id)) {
            produit.setId(id);
            return produitRepository.save(produit);
        }
        return null;  // Retourner null si le produit n'existe pas
    }

    // Méthode pour supprimer un produit par son ID
    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }
}

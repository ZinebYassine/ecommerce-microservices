package ma.projet.rest.microservice_produit;

import ma.projet.rest.microservice_produit.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    // Vous pouvez ajouter des méthodes personnalisées si nécessaire
}

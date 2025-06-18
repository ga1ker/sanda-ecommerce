

interface ProductosCategoriaProps {
    params: any;
}

export default function ProductosCategoria({ params }: ProductosCategoriaProps) {
    return (
        <div>
            <h1>Productos de la categoría: {params.categoria}</h1>
        </div>
    );
}
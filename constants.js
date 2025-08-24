export function checkIfValidElement(element){
    
    if (typeof element.name !== "string" || typeof element.age !== "number" || typeof element.height !== "number"){
        return false;
    }

    if (element.name.length == 0 || element.age < 0 || element.height < 0){
        return false;
    }

    return true;
}

//HECHO CON CHATGPT
export const person_list = [
    // ✅ Casos válidos comunes
    { name: "Jorge", age: 18, height: 184 },
    { name: "Raul", age: 30, height: 170 },
    { name: "María", age: 25, height: 160 },

    // ⚠️ Valores límite
    { name: "Bebé", age: 0, height: 50 },
    { name: "Anciano", age: 120, height: 140 },
    { name: "Gigante", age: 40, height: 300 },
    { name: "Enano", age: 22, height: 50 },

    // ❌ Datos faltantes
    { name: "SinEdad", height: 175 },
    { name: "SinAltura", age: 20 },
    { age: 40, height: 180 }, // sin nombre
    {}, // vacío

    // ❌ Tipos incorrectos
    { name: 12345, age: "veinte", height: "alto" },
    { name: true, age: false, height: null },
    { name: ["Juan"], age: { años: 25 }, height: undefined },

    // ⚠️ Casos raros con strings
    { name: "", age: 25, height: 175 }, // nombre vacío
    { name: "   ", age: 25, height: 175 }, // espacios
    { name: "ExtremadamenteLargoNombre".repeat(10), age: 25, height: 175 },

    // ⚠️ Números problemáticos
    { name: "Decimal", age: 25.7, height: 170.5 },
    { name: "Negativo", age: -5, height: -160 },
    { name: "Infinito", age: Infinity, height: -Infinity },
    { name: "NaNCase", age: NaN, height: NaN },

    // ⚠️ Valores nulos o indefinidos
    { name: null, age: null, height: null },
    { name: undefined, age: undefined, height: undefined },

    // ⚠️ Duplicados
    { name: "Jorge", age: 18, height: 184 },
    { name: "Jorge", age: 18, height: 184 },

    // ⚠️ Datos mezclados raros
    { name: "Emoji", age: 25, height: "👽" },
    { name: "SQLInjection'; DROP TABLE users;--", age: 30, height: 175 },
    { name: "<script>alert('xss')</script>", age: 22, height: 180 },
    { name: "中文名字", age: 33, height: 170 },
    { name: "Алексей", age: 40, height: 185 },
    { name: "😎🔥💯", age: 19, height: 177 }
];
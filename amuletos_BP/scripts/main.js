import { world, system, EquipmentSlot } from "@minecraft/server";

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        const inventory = player.getComponent("minecraft:equippable");
        if (!inventory) continue;

        const mainHand = inventory.getEquipment(EquipmentSlot.Mainhand);
        const offHand = inventory.getEquipment(EquipmentSlot.Offhand);

        // Velocidad
        if (mainHand?.typeId === "daniel:amuleto_velocidad" || offHand?.typeId === "daniel:amuleto_velocidad") {
            player.addEffect("speed", 80, { amplifier: 4, showParticles: false });
        }
        // Fuerza
        if (mainHand?.typeId === "daniel:amuleto_fuerza" || offHand?.typeId === "daniel:amuleto_fuerza") {
            player.addEffect("strength", 80, { amplifier: 2, showParticles: false });
        }
        // Resistencia al Fuego
        if (mainHand?.typeId === "daniel:amuleto_resistencia_fuego" || offHand?.typeId === "daniel:amuleto_resistencia_fuego") {
            player.addEffect("fire_resistance", 80, { amplifier: 0, showParticles: false });
        }
        // Regeneración
        if (mainHand?.typeId === "daniel:amuleto_regeneracion" || offHand?.typeId === "daniel:amuleto_regeneracion") {
            player.addEffect("regeneration", 80, { amplifier: 0, showParticles: false });
        }
        // Visión Nocturna
        if (mainHand?.typeId === "daniel:amuleto_vision_nocturna" || offHand?.typeId === "daniel:amuleto_vision_nocturna") {
            player.addEffect("night_vision", 280, { amplifier: 0, showParticles: false });
        }
        // Invisibilidad
        if (mainHand?.typeId === "daniel:amuleto_invisibilidad" || offHand?.typeId === "daniel:amuleto_invisibilidad") {
            player.addEffect("invisibility", 80, { amplifier: 0, showParticles: false });
        }
        // Respiracion Acuática
        if (mainHand?.typeId === "daniel:amuleto_respiracion_acuatica" || offHand?.typeId === "daniel:amuleto_respiracion_acuatica") {
            player.addEffect("water_breathing", 80, { amplifier: 0, showParticles: false });
        }
        // Impulso de Salto
        if (mainHand?.typeId === "daniel:amuleto_impulso_salto" || offHand?.typeId === "daniel:amuleto_impulso_salto") {
            player.addEffect("jump_boost", 80, { amplifier: 3, showParticles: false });
        }
        // Modo Dios
        if (mainHand?.typeId === "daniel:amuleto_dios" || offHand?.typeId === "daniel:amuleto_dios") {
            player.addEffect("strength", 80, { amplifier: 255, showParticles: false });
            player.addEffect("resistance", 80, { amplifier: 255, showParticles: false });
        }
    }
}, 20);

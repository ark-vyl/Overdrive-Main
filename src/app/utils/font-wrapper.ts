import localFont from "next/font/local";

type OrbitionSchema = 'Black' | 'Bold' | 'ExtraBold' | 'Medium' | 'Regular' | 'SemiBold'
type KodeMonoSchema = 'Bold' | 'Medium' | 'Regular' | 'SemiBold'


// Post No Bills
const postNoBills = localFont({
  src: "../../font/post_no_bills.ttf"
});

// Orbiton setup
const orbitonRegular = localFont({ src: "../../font/orbiton/Orbitron-Regular.ttf" });
const orbitonBold = localFont({ src: "../../font/orbiton/Orbitron-Bold.ttf" });
const orbitonExtraBold = localFont({ src: "../../font/orbiton/Orbitron-ExtraBold.ttf" });
const orbitonMedium = localFont({ src: "../../font/orbiton/Orbitron-Medium.ttf" });
const orbitonSemiBold = localFont({ src: "../../font/orbiton/Orbitron-SemiBold.ttf" });
const orbitonBlack = localFont({ src: "../../font/orbiton/Orbitron-Black.ttf" });

// KodeMono setup
const kodeMonoRegular = localFont({ src: "../../font/kode_mono/KodeMono-Regular.ttf" });
const kodeMonoMedium = localFont({ src: "../../font/kode_mono/KodeMono-Medium.ttf" });
const kodeMonoSemiBold = localFont({ src: "../../font/kode_mono/KodeMono-SemiBold.ttf" });
const kodeMonoBold = localFont({ src: "../../font/kode_mono/KodeMono-Bold.ttf" });

export const fontGroup = {
  postNoBills: postNoBills.className,
  orbiton: (weight: OrbitionSchema) => {
    const option = {
      Black: orbitonBlack,
      Bold: orbitonBold,
      SemiBold: orbitonSemiBold,
      Medium: orbitonMedium,
      Regular: orbitonRegular,
      ExtraBold: orbitonExtraBold
    };
    return option[weight].className;
  },
  kodeMono: (weight: KodeMonoSchema) => {
    const option = {
      Bold: kodeMonoBold,
      SemiBold: kodeMonoSemiBold,
      Medium: kodeMonoMedium,
      Regular: kodeMonoRegular
    };
    return option[weight].className;
  }
};

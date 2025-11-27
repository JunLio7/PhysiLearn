// Physics formulas and calculation utilities
// Force and Motion
export const forceFormula = {
  name: "Newton's Second Law",
  formula: 'F = m × a',
  variables: {
    F: {
      name: 'Force',
      unit: 'N'
    },
    m: {
      name: 'Mass',
      unit: 'kg'
    },
    a: {
      name: 'Acceleration',
      unit: 'm/s²'
    }
  },
  calculate: (m: number, a: number) => m * a,
  solveForMass: (F: number, a: number) => F / a,
  solveForAcceleration: (F: number, m: number) => F / m
};
// Kinematics
export const kinematicsFormulas = {
  velocityTime: {
    name: 'Final Velocity (from time)',
    formula: 'v = u + a × t',
    variables: {
      v: {
        name: 'Final Velocity',
        unit: 'm/s'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      a: {
        name: 'Acceleration',
        unit: 'm/s²'
      },
      t: {
        name: 'Time',
        unit: 's'
      }
    },
    calculate: (u: number, a: number, t: number) => u + a * t
  },
  velocityDisplacement: {
    name: 'Final Velocity (from displacement)',
    formula: 'v² = u² + 2 × a × s',
    variables: {
      v: {
        name: 'Final Velocity',
        unit: 'm/s'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      a: {
        name: 'Acceleration',
        unit: 'm/s²'
      },
      s: {
        name: 'Displacement',
        unit: 'm'
      }
    },
    calculate: (u: number, a: number, s: number) => Math.sqrt(Math.pow(u, 2) + 2 * a * s)
  },
  displacement: {
    name: 'Displacement',
    formula: 's = u × t + ½ × a × t²',
    variables: {
      s: {
        name: 'Displacement',
        unit: 'm'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      a: {
        name: 'Acceleration',
        unit: 'm/s²'
      },
      t: {
        name: 'Time',
        unit: 's'
      }
    },
    calculate: (u: number, a: number, t: number) => u * t + 0.5 * a * Math.pow(t, 2)
  },
  averageVelocity: {
    name: 'Average Velocity',
    formula: 'v_avg = (u + v) / 2',
    variables: {
      v_avg: {
        name: 'Average Velocity',
        unit: 'm/s'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      v: {
        name: 'Final Velocity',
        unit: 'm/s'
      }
    },
    calculate: (u: number, v: number) => (u + v) / 2
  }
};
// Free Fall
export const freeFallFormulas = {
  velocity: {
    name: 'Velocity in Free Fall',
    formula: 'v = u + g × t',
    variables: {
      v: {
        name: 'Final Velocity',
        unit: 'm/s'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      g: {
        name: 'Gravitational Acceleration',
        unit: 'm/s²',
        default: 9.81
      },
      t: {
        name: 'Time',
        unit: 's'
      }
    },
    calculate: (u: number, t: number, g: number = 9.81) => u + g * t
  },
  height: {
    name: 'Height in Free Fall',
    formula: 'h = u × t + ½ × g × t²',
    variables: {
      h: {
        name: 'Height',
        unit: 'm'
      },
      u: {
        name: 'Initial Velocity',
        unit: 'm/s'
      },
      g: {
        name: 'Gravitational Acceleration',
        unit: 'm/s²',
        default: 9.81
      },
      t: {
        name: 'Time',
        unit: 's'
      }
    },
    calculate: (u: number, t: number, g: number = 9.81) => u * t + 0.5 * g * Math.pow(t, 2)
  }
};
// Trigonometry for Vectors
export const trigFunctions = {
  sin: {
    name: 'Sine',
    formula: 'sin(θ) = opposite / hypotenuse',
    calculate: (angle: number) => Math.sin(angle * Math.PI / 180),
    solveForAngle: (opposite: number, hypotenuse: number) => Math.asin(opposite / hypotenuse) * 180 / Math.PI,
    solveForOpposite: (angle: number, hypotenuse: number) => Math.sin(angle * Math.PI / 180) * hypotenuse,
    solveForHypotenuse: (angle: number, opposite: number) => opposite / Math.sin(angle * Math.PI / 180)
  },
  cos: {
    name: 'Cosine',
    formula: 'cos(θ) = adjacent / hypotenuse',
    calculate: (angle: number) => Math.cos(angle * Math.PI / 180),
    solveForAngle: (adjacent: number, hypotenuse: number) => Math.acos(adjacent / hypotenuse) * 180 / Math.PI,
    solveForAdjacent: (angle: number, hypotenuse: number) => Math.cos(angle * Math.PI / 180) * hypotenuse,
    solveForHypotenuse: (angle: number, adjacent: number) => adjacent / Math.cos(angle * Math.PI / 180)
  },
  tan: {
    name: 'Tangent',
    formula: 'tan(θ) = opposite / adjacent',
    calculate: (angle: number) => Math.tan(angle * Math.PI / 180),
    solveForAngle: (opposite: number, adjacent: number) => Math.atan(opposite / adjacent) * 180 / Math.PI,
    solveForOpposite: (angle: number, adjacent: number) => Math.tan(angle * Math.PI / 180) * adjacent,
    solveForAdjacent: (angle: number, opposite: number) => opposite / Math.tan(angle * Math.PI / 180)
  }
};
// Vector operations
export const vectorOperations = {
  addition: {
    name: 'Vector Addition',
    formula: '|R|² = |A|² + |B|² + 2|A||B|cos(θ)',
    calculate: (magnitudeA: number, magnitudeB: number, angleBetween: number) => {
      const angleRad = angleBetween * Math.PI / 180;
      return Math.sqrt(Math.pow(magnitudeA, 2) + Math.pow(magnitudeB, 2) + 2 * magnitudeA * magnitudeB * Math.cos(angleRad));
    }
  },
  components: {
    name: 'Vector Components',
    formulaX: 'A_x = |A| × cos(θ)',
    formulaY: 'A_y = |A| × sin(θ)',
    calculateX: (magnitude: number, angle: number) => magnitude * Math.cos(angle * Math.PI / 180),
    calculateY: (magnitude: number, angle: number) => magnitude * Math.sin(angle * Math.PI / 180)
  }
};
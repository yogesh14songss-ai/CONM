var unitData = [
  {
    "title": "Numerical and Error Analysis",
    "shortTitle": "Numerical and Error Analysis",
    "description": "Understand why numerical methods are needed, how approximate values are represented, and how errors enter and move through calculations.",
    "topics": [
      {
        "title": "Introduction to Numerical Analysis and Numerical Methods",
        "overview": "Numerical analysis studies mathematical problems through approximate numerical values. Numerical methods are the step-by-step procedures used to obtain those values when an exact answer is difficult or impractical.",
        "concept": [
          "Numerical analysis is the branch of mathematics that studies how to solve mathematical problems by using numerical calculations. In many practical problems, an exact answer is difficult to find, or an exact formula may not be available. In such cases, we calculate an approximate answer by following a clear set of steps. These steps are called a numerical method.",
          "A numerical method is an algorithm made of simple operations such as addition, subtraction, multiplication, division and repeated calculations. A computer can perform these operations many times and can therefore solve large problems in a reasonable time. Numerical methods are used to find roots of equations, solve systems of linear equations, estimate values between observations, calculate definite integrals and solve differential equations.",
          "Numerical analysis also studies whether a method gives a reliable answer. Important qualities are accuracy, stability, convergence and efficiency. Accuracy tells how close the answer is to the correct value. Convergence tells whether repeated calculations move towards the required answer. Stability tells whether small errors remain controlled during calculation. A good numerical answer should be checked for its error and should be reported with suitable decimal places."
        ],
        "formula": [
          "Approximate result = exact result + numerical error",
          "Numerical error = approximate value − exact value"
        ],
        "formulaNote": "The exact value may not be known in a real computation. In that case, error is estimated using a bound, a residual, or a more accurate calculation.",
        "example": [
          "A calculator may report √2 as 1.414214. The mathematical value has an infinite decimal expansion, so the displayed result is an approximation.",
          "A numerical method is useful when a problem is too complex for a practical exact solution or when a computer must process many values quickly."
        ],
        "steps": [
          "Define the mathematical problem and identify the required answer.",
          "Choose a method that suits the problem and the required accuracy.",
          "Select starting values, step size or other input data.",
          "Apply the algorithm and check its stopping condition.",
          "Report the approximation together with suitable accuracy information."
        ],
        "points": [
          "A numerical method gives an approximate answer, not automatically an exact one.",
          "The choice of method affects accuracy, speed and reliability.",
          "A good numerical solution should be checked for error and convergence."
        ],
        "caution": "Do not treat the number of printed decimal places as proof of accuracy. A result can display many digits and still be inaccurate if the method or input data are poor.",
        "programs": []
      },
      {
        "title": "Exact and Approximate Numbers",
        "overview": "An exact number is known without measurement or rounding uncertainty. An approximate number represents a value that has been measured, rounded, truncated or calculated numerically.",
        "concept": [
          "An exact number is a value that is known completely in the given mathematical situation. For example, if a box contains 24 books, the number 24 is exact because the books have been counted. Numbers defined by a mathematical rule are also exact. Exact values do not contain measurement or rounding uncertainty in the stated problem.",
          "An approximate number is a value that is close to the actual value but may not be completely correct. Measurements are usually approximate because measuring instruments have limited accuracy. For example, a table length recorded as 120.5 cm is an approximate value. A value may also become approximate when digits are removed by chopping or rounding, or when a numerical method is used to calculate it.",
          "The symbol = is used for exact equality, while the symbol ≈ means approximately equal to. During error calculations, the accepted or true value must be kept separate from the approximate value. The number of digits written should match the information available. Writing more decimal places does not automatically make a value more accurate."
        ],
        "formula": [
          "Approximation: x ≈ xₐ",
          "Error: xₐ − x",
          "x = reference / exact value;  xₐ = approximate value"
        ],
        "formulaNote": "The symbol ≈ means approximately equal to. The symbol = is used for an exact equality.",
        "example": [
          "A box contains exactly 24 books. The count 24 is exact.",
          "A measured desk length recorded as 120.5 cm is approximate because the measurement tool and reading have limited resolution."
        ],
        "steps": [
          "Identify whether the value is counted, defined, measured or calculated.",
          "Mark a measured or rounded value as approximate.",
          "Keep the reference value separate from its approximation during error calculations.",
          "Avoid reporting unsupported digits beyond the precision of the input."
        ],
        "points": [
          "Exact values have no measurement error in the stated mathematical model.",
          "Approximate values may contain measurement, rounding or truncation errors.",
          "The number of digits written should match the information available."
        ],
        "caution": "A value written with many decimal places is not necessarily exact. The method used to obtain those digits matters.",
        "programs": []
      },
      {
        "title": "Accuracy, Precision and Significant Digits",
        "overview": "Accuracy describes closeness to the true value. Precision describes the fineness or repeatability of a result. Significant digits communicate the meaningful digits in a numerical value.",
        "concept": [
          "Accuracy means how close a calculated or measured value is to the accepted or true value. A result is highly accurate when the difference between the result and the true value is small. Precision describes how close repeated measurements are to one another. A set of measurements can be precise but not accurate when the values are close together but are all far from the true value.",
          "Significant digits are the meaningful digits in a number. They start from the first non-zero digit and include the digits that follow it. Leading zeros only show the position of the decimal point and are not significant. Zeros between non-zero digits are significant. Zeros at the end of a decimal number are significant when they show the precision of the measurement.",
          "For example, 0.004506 has four significant digits: 4, 5, 0 and 6. The number 12.300 has five significant digits when the last zeros are intended to show measurement precision. When multiplying or dividing, the answer is generally written with the same number of significant digits as the input having the fewest significant digits. For addition and subtraction, decimal places are normally considered. The rounding rule given by the question or teacher should always be followed."
        ],
        "formula": [
          "Accuracy: closeness to the accepted value",
          "Precision: closeness among repeated measurements",
          "Significant digits: meaningful digits from the first non-zero digit"
        ],
        "formulaNote": "The exact rounding convention may depend on the course or laboratory instructions. Follow the convention specified by your teacher or question.",
        "example": [
          "The number 0.004506 has four significant digits: 4, 5, 0 and 6. The zeros before 4 are leading zeros and are not counted.",
          "The number 12.300 has five significant digits when the written trailing zeros are intended to indicate measured precision."
        ],
        "steps": [
          "Find the first non-zero digit from the left.",
          "Count that digit and every following significant digit.",
          "For rounding, inspect the first digit that will be removed.",
          "Increase the last retained digit by one when the first removed digit is 5 or more; otherwise leave it unchanged, unless a different rounding rule is specified."
        ],
        "points": [
          "Accuracy and precision are different ideas.",
          "Leading zeros are not significant.",
          "Zeros between significant digits are significant.",
          "Trailing decimal zeros can communicate precision."
        ],
        "caution": "Do not remove meaningful trailing zeros when the question is asking you to report a measured value to a fixed number of significant digits.",
        "programs": []
      },
      {
        "title": "Measures of Error",
        "overview": "Error measures compare an approximate result with a reference value. The syllabus includes absolute error, relative error and percentage error.",
        "concept": [
          "Error is the difference between an approximate value and the true or accepted value. It is used to measure how far a numerical answer is from the reference value. Three common measures are absolute error, relative error and percentage error. These measures help us understand the size of an error and compare the results of different calculations.",
          "Absolute error is the positive size of the difference between the true value and the approximate value. It has the same unit as the quantity being measured. Relative error is found by dividing the absolute error by the absolute value of the true value. It has no unit because the same units cancel during division.",
          "Percentage error is the relative error multiplied by 100. It expresses the error as a percentage, which is easy to understand and compare. For example, if the true value is 10 and the approximate value is 9.8, the absolute error is 0.2, the relative error is 0.02 and the percentage error is 2%. Relative error cannot be calculated when the true value is zero because division by zero is not possible."
        ],
        "formula": [
          "Absolute error: Eₐ = |x − xₐ|",
          "Relative error: Eᵣ = |x − xₐ| / |x|",
          "Percentage error: Eₚ = Eᵣ × 100%"
        ],
        "formulaNote": "x is the true or accepted value. xₐ is the approximate value. Relative error assumes x ≠ 0.",
        "example": [
          "True value x = 10 and approximate value xₐ = 9.8.",
          "Absolute error = |10 − 9.8| = 0.2.",
          "Relative error = 0.2 / 10 = 0.02. Percentage error = 0.02 × 100 = 2%."
        ],
        "steps": [
          "Write the accepted value and the approximate value.",
          "Subtract the values and take the absolute value.",
          "Divide absolute error by the magnitude of the accepted value to obtain relative error.",
          "Multiply relative error by 100 to obtain percentage error."
        ],
        "points": [
          "Absolute error is expressed in the same unit as the quantity.",
          "Relative error is dimensionless.",
          "Percentage error is relative error multiplied by 100.",
          "Relative error cannot be calculated using a zero reference value."
        ],
        "caution": "Do not divide by the approximate value unless the question specifically defines that convention. The standard relative error uses the true or accepted value.",
        "programs": [
          {
            "type": "extra",
            "index": 0
          }
        ]
      },
      {
        "title": "Types and Sources of Errors",
        "overview": "Numerical calculations can be affected by human mistakes, simplified mathematical models, uncertain input data and finite computer arithmetic.",
        "concept": [
          "Errors in numerical work can enter at different stages. A blunder is a human mistake, such as entering the wrong number, writing a wrong sign or using an incorrect formula. A modelling error occurs when a real situation is represented by a simplified mathematical model. The model may not include every condition of the real problem, so its answer may differ from the real result.",
          "Inherent errors, also called data errors, are already present in the given information. They may be caused by inaccurate instruments, observations or measurements. A numerical error is introduced while performing calculations. Computers store numbers with a limited number of digits, so round-off and chopping errors can occur. Truncation error can occur when an exact or infinite mathematical process is replaced by a finite calculation.",
          "It is useful to identify the source of an error before trying to reduce it. Input values and units should be checked for data errors. The assumptions of the mathematical model should be reviewed for modelling errors. The formula and calculation steps should be checked for numerical errors. A result that appears unreasonable should be recalculated or checked by another method."
        ],
        "formula": [
          "Total observed error may include: data error + modelling error + numerical error",
          "Numerical error includes round-off, chopping and truncation effects"
        ],
        "formulaNote": "The expression is a conceptual breakdown. The separate contributions may interact and are not always simply additive.",
        "example": [
          "If a bridge model assumes a constant load when the real load changes, the difference is a modelling error.",
          "If a measured input is recorded as 5.2 instead of its more accurate value 5.24, the input contains measurement or data error.",
          "If a programmer enters 52 instead of 5.2, the mistake is a blunder."
        ],
        "steps": [
          "Check input values and units to identify possible data errors.",
          "Review assumptions to identify modelling limitations.",
          "Check the algorithm and arithmetic for numerical errors.",
          "Repeat or independently verify calculations when a result appears unreasonable."
        ],
        "points": [
          "Blunders are usually avoidable.",
          "Modelling errors come from assumptions or simplifications.",
          "Inherent errors are present in the given data.",
          "Round-off, chopping and truncation are numerical errors."
        ],
        "caution": "Do not use the word truncation as a synonym for every numerical error. It specifically refers to replacing an infinite or longer process with a finite one, or cutting off digits in a stated digit-handling context.",
        "programs": []
      },
      {
        "title": "Round-off, Chopping and Truncation Errors",
        "overview": "Computers store and process a limited number of digits. Round-off and chopping change a number to fit a chosen precision, while truncation error often results from replacing an exact mathematical process with a finite approximation.",
        "concept": [
          "A computer cannot always store every digit of a real number. It works with a limited number of digits, so a number may need to be shortened. Chopping and rounding are two ways of shortening a number. In chopping, all digits after the required position are removed and the last kept digit is not changed.",
          "In rounding, the first digit that will be removed is checked. If this digit is 5 or greater, the last retained digit is increased by one. If it is less than 5, the last retained digit remains unchanged. For example, when three decimal places are required, chopping 3.14159 gives 3.141, while rounding gives 3.142.",
          "Truncation error is different from ordinary rounding error. It occurs when an exact mathematical process is replaced by a limited number of steps or terms. For example, an infinite series may be calculated by keeping only its first few terms. The unused terms cause truncation error. In long calculations, round-off errors may also collect and affect the final answer."
        ],
        "formula": [
          "Chopping to n decimal places: retain digits before the cut",
          "Rounding to n decimal places: inspect the first discarded digit",
          "Truncation error = exact result − finite approximation"
        ],
        "formulaNote": "The sign of an error depends on the convention used. Error magnitude is usually discussed using an absolute value.",
        "example": [
          "Take 3.14159 and keep three digits after the decimal point.",
          "Chopping gives 3.141. Rounding gives 3.142 because the next digit is 5.",
          "For the series eˣ = 1 + x + x²/2! + x³/3! + …, keeping only the first terms introduces truncation error."
        ],
        "steps": [
          "Decide how many digits or terms will be retained.",
          "For chopping, remove all later digits.",
          "For rounding, inspect the first removed digit and apply the chosen rule.",
          "For a truncated series or algorithm, compare the finite approximation with the exact expression or a reliable reference."
        ],
        "points": [
          "Chopping does not round the last retained digit.",
          "Rounding uses the first discarded digit.",
          "Truncation error can arise even when every arithmetic operation is performed exactly.",
          "Repeated round-off can accumulate during a long computation."
        ],
        "caution": "Do not confuse rounding error with truncation error in a Taylor-series or numerical-algorithm question. Identify exactly what has been shortened.",
        "programs": [
          {
            "type": "extra",
            "index": 1
          }
        ]
      },
      {
        "title": "Error Propagation in Arithmetic Operations",
        "overview": "When approximate numbers are added, subtracted, multiplied or divided, their uncertainties affect the result. Error propagation estimates how input errors influence the calculated value.",
        "concept": [
          "Error propagation means the way errors in input values affect the final result of a calculation. When approximate values are used in an arithmetic operation, the result is also approximate. The error in the final answer depends on the errors in the values used and on the operation being performed.",
          "For addition and subtraction, the maximum absolute errors are added to get a safe error bound. If the absolute errors in two values are Δx and Δy, the absolute error bound in their sum or difference is Δx + Δy. This rule is useful because the individual errors may increase the total error.",
          "For multiplication and division, relative errors are commonly used. For small input errors, the approximate relative error in the product or quotient is the sum of the relative errors of the input values. The result is a first-order estimate, so it is most suitable when the errors are small. The operation and the type of error must be checked before applying a formula. A zero value cannot be used as a denominator in a relative-error calculation."
        ],
        "formula": [
          "z = x ± y:  Δz ≤ Δx + Δy",
          "z = xy:  |Δz / z| ≈ |Δx / x| + |Δy / y|",
          "z = x / y:  |Δz / z| ≈ |Δx / x| + |Δy / y|"
        ],
        "formulaNote": "Δx and Δy denote maximum absolute uncertainties. The product and quotient relations are small-error, first-order estimates; x and y must be non-zero where division by them is used.",
        "example": [
          "Suppose x = 10 ± 0.1 and y = 5 ± 0.05.",
          "For z = x + y, the maximum absolute uncertainty is approximately 0.1 + 0.05 = 0.15.",
          "The relative uncertainties are 0.1/10 = 0.01 and 0.05/5 = 0.01. For z = xy, the approximate relative uncertainty is 0.02, or 2%."
        ],
        "steps": [
          "Identify the arithmetic operation and the input uncertainties.",
          "For addition or subtraction, add the absolute uncertainty bounds.",
          "For multiplication or division, convert each absolute uncertainty to a relative uncertainty.",
          "Add the relative uncertainties for a first-order estimate.",
          "Convert the final relative uncertainty back to an absolute uncertainty if required."
        ],
        "points": [
          "Addition and subtraction use absolute-error bounds.",
          "Multiplication and division commonly use relative-error estimates.",
          "For small uncertainties, first-order propagation is a practical approximation.",
          "A zero denominator makes a quotient undefined."
        ],
        "caution": "Do not add relative errors for addition and subtraction as the standard rule. Match the error measure to the operation.",
        "programs": [
          {
            "type": "extra",
            "index": 2
          }
        ]
      },
      {
        "title": "Arithmetic of Normalized Floating-Point Numbers",
        "overview": "Floating-point representation stores a number using a sign, a significand and an exponent. Normalization gives a standard form so that the leading significant digit is non-zero.",
        "concept": [
          "A computer stores many real numbers in floating-point form. A floating-point number is written using a sign, a significand and an exponent. The significand contains the important digits, while the exponent tells how far the decimal or binary point is shifted. This form allows very large and very small numbers to be stored in a compact way.",
          "In normalized decimal form, a non-zero number is written as ±m × 10^e, where the value of m is at least 1 and less than 10. For example, 1250 is written as 1.25 × 10^3 and 0.0048 is written as 4.8 × 10^-3. Computers normally use base 2 instead of base 10, but the same idea of a significand and exponent is used.",
          "For addition and subtraction, the exponents must first be made equal so that the significands can be combined. For multiplication, the significands are multiplied and the exponents are added. For division, the significands are divided and the exponents are subtracted. After an operation, the result may need normalization and rounding. Because the stored significand has a limited number of bits, some values cannot be represented exactly."
        ],
        "formula": [
          "Normalized decimal form: x = ±m × 10ᵉ, 1 ≤ m < 10",
          "Addition / subtraction: align exponents before combining significands",
          "Multiplication: (m₁ × 10ᵃ)(m₂ × 10ᵇ) = (m₁m₂) × 10ᵃ⁺ᵇ",
          "Division: (m₁ × 10ᵃ)/(m₂ × 10ᵇ) = (m₁/m₂) × 10ᵃ⁻ᵇ"
        ],
        "formulaNote": "After an operation, the significand may need normalization and rounding to the available precision. Binary computers use base 2 rather than base 10.",
        "example": [
          "The decimal number 1250 can be written in normalized form as 1.25 × 10³.",
          "The number 0.0048 can be written as 4.8 × 10⁻³.",
          "For multiplication, (1.2 × 10³)(2.0 × 10²) = 2.4 × 10⁵."
        ],
        "steps": [
          "Write each number as a significand multiplied by a base raised to an exponent.",
          "For addition or subtraction, first align the exponents.",
          "For multiplication, multiply significands and add exponents.",
          "For division, divide significands and subtract exponents.",
          "Normalize the result and round it to the available precision."
        ],
        "points": [
          "Normalization gives a standard representation.",
          "A finite significand causes representation and round-off limitations.",
          "Exponent alignment is needed for addition and subtraction.",
          "Overflow and underflow can occur when a result is outside the representable range."
        ],
        "caution": "Do not add exponents during addition. Exponent addition is used for multiplication; exponents are subtracted during division.",
        "programs": []
      }
    ]
  },
  {
    "title": "Types of Equations and Non-Linear Equations",
    "shortTitle": "Equation Solving",
    "description": "Classify equations, understand root-search strategies and apply the syllabus root-finding algorithms to nonlinear equations.",
    "topics": [
      {
        "title": "Types of Equations",
        "overview": "Equations in the syllabus include linear, quadratic, higher-degree polynomial and transcendental equations. Their form helps determine an appropriate solution method.",
        "concept": [
          "An equation is a mathematical statement that says two expressions are equal. In numerical methods, equations are often written in the form f(x) = 0 because the main task is to find the value of x that makes the function equal to zero. This value is called a root or solution of the equation.",
          "A linear equation has the highest power of the variable equal to one. A quadratic equation has the highest power equal to two. A polynomial equation may have degree three or more when its highest non-zero power is three or greater. The degree is found after simplifying the equation and checking the highest power with a non-zero coefficient.",
          "A transcendental equation contains functions such as exponential, logarithmic or trigonometric functions. Examples include e^x - 3 = 0 and cos x - x = 0. Linear and quadratic equations often have direct algebraic solutions. Many higher-degree polynomial and transcendental equations are difficult to solve exactly, so numerical methods are used to find approximate roots."
        ],
        "formula": [
          "Linear: ax + b = 0,  a ≠ 0",
          "Quadratic: ax² + bx + c = 0,  a ≠ 0",
          "Polynomial: aₙxⁿ + … + a₁x + a₀ = 0",
          "Transcendental: examples include eˣ − 3 = 0 or sin x − x/2 = 0"
        ],
        "formulaNote": "The degree of a polynomial is the highest power with a non-zero coefficient.",
        "example": [
          "2x + 6 = 0 is linear and has root x = −3.",
          "x² − 5x + 6 = 0 is quadratic and has roots 2 and 3.",
          "x³ − x − 4 = 0 is a cubic polynomial. cos x − x = 0 is transcendental."
        ],
        "steps": [
          "Rearrange the equation into the form f(x) = 0.",
          "Identify whether it is linear, quadratic, higher-degree polynomial or transcendental.",
          "Check whether a direct algebraic method is practical.",
          "For a suitable nonlinear equation, choose a numerical root-finding method."
        ],
        "points": [
          "Linear equations have degree one.",
          "Quadratic equations have degree two.",
          "Higher-degree polynomial equations have degree three or more.",
          "Transcendental equations include exponential, logarithmic and trigonometric functions."
        ],
        "caution": "An equation containing x² is not automatically a higher-degree polynomial: a non-zero quadratic coefficient gives degree two. Identify the highest power after simplifying.",
        "programs": []
      },
      {
        "title": "Direct and Indirect Methods for Non-Linear Equations",
        "overview": "A direct method uses an explicit formula or finite algebraic process when available. An indirect method uses an iterative numerical process to approach a root.",
        "concept": [
          "The purpose of solving a non-linear equation is to find a value of x for which f(x) = 0. There are two broad ways to solve such equations: direct methods and indirect or iterative methods. The method is selected according to the form of the equation and the type of answer required.",
          "A direct method uses algebraic steps or a formula to calculate the answer. For example, a linear equation can be solved by rearranging it, and a quadratic equation can be solved by factorisation or the quadratic formula. These methods are useful when a suitable exact formula is available and can be applied easily.",
          "An indirect method starts with an initial value or interval and produces better approximations through repeated calculations. Each repeated calculation is called an iteration. Bisection, False Position, Newton–Raphson and Birge–Vieta are examples from this unit. Iterative methods need a suitable starting value and a stopping condition. The final approximation should be checked by putting it into the original equation."
        ],
        "formula": [
          "General root problem: f(x) = 0",
          "Iterative form: xₙ₊₁ = Φ(xₙ) or a method-specific update"
        ],
        "formulaNote": "Φ represents the update rule of an iterative algorithm. The exact expression depends on the method.",
        "example": [
          "The equation x² − 5x + 6 = 0 can be solved directly by factorisation: (x − 2)(x − 3) = 0.",
          "The equation x³ − x − 4 = 0 does not have a convenient elementary solution for routine calculation, so a numerical method can approximate its root."
        ],
        "steps": [
          "Try to simplify the equation algebraically.",
          "Use a direct formula if it gives a practical exact solution.",
          "Otherwise, select an iterative method according to the available bracket, derivative and starting estimate.",
          "Check convergence and verify the final approximation in f(x)."
        ],
        "points": [
          "Direct methods may provide exact formula-based answers.",
          "Indirect methods produce successive approximations.",
          "The selection depends on the equation and the available information.",
          "An iterative method needs a suitable stopping condition."
        ],
        "caution": "Do not assume every equation has a simple closed-form solution. The purpose of numerical root finding is to handle cases where direct solutions are unavailable or impractical.",
        "programs": []
      },
      {
        "title": "Bracketing and Open Iterative Methods",
        "overview": "Bracketing methods keep a root inside an interval. Open methods generate new estimates without maintaining a sign-changing interval.",
        "concept": [
          "Root-finding methods can be divided into bracketing methods and open methods. A bracketing method starts with two values, usually called a and b. For a continuous function, if f(a) and f(b) have opposite signs, at least one root lies between a and b. The method keeps an interval that contains a root and makes that interval smaller.",
          "Bisection and False Position are bracketing methods. Bisection selects the midpoint of the interval. False Position selects a point using a straight line through the two end points of the function. Both methods keep a root inside the interval when the starting interval is valid and the function is continuous.",
          "An open method does not keep a sign-changing interval around the root. It uses one or more starting estimates to calculate the next estimate. Newton–Raphson is an open method and uses the derivative of the function. Open methods can be fast, but a poor starting value or a zero derivative can make the method fail or move away from the required root."
        ],
        "formula": [
          "Bracketing condition: f(a) × f(b) < 0",
          "Bisection: c = (a + b) / 2",
          "Newton update: xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)"
        ],
        "formulaNote": "The sign-change condition guarantees a root in the interval only when f is continuous on [a, b]. It does not prove that the root is unique.",
        "example": [
          "For f(x) = x² − 2, f(1) = −1 and f(2) = 2. The interval [1, 2] brackets a root.",
          "Newton–Raphson can start from x₀ = 1.5 and generate a new estimate using the derivative, without keeping a bracket."
        ],
        "steps": [
          "Check whether the function is continuous in the search interval.",
          "For a bracketing method, find endpoints with opposite signs.",
          "For an open method, select one or more starting estimates.",
          "Apply the selected iteration and monitor the change or residual.",
          "Verify that the final estimate is meaningful for the original equation."
        ],
        "points": [
          "Bisection and false position are bracketing methods.",
          "Newton–Raphson is an open method.",
          "Bracketing methods usually provide a reliable interval safeguard.",
          "Open methods can be fast but are more sensitive to initial estimates."
        ],
        "caution": "A sign change is a useful root-bracketing test, but it can miss roots where a graph touches the x-axis without crossing it.",
        "programs": []
      },
      {
        "title": "Choosing Initial Approximations and Search Intervals",
        "overview": "A good initial estimate or interval makes root-finding more reliable. A search interval can be identified by evaluating the function at a sequence of points.",
        "concept": [
          "A numerical root-finding method needs a suitable starting point or starting interval. A good starting value helps the method reach the required root more easily. A poor starting value may cause slow progress, failure or convergence to a different root. The given equation should first be studied so that a reasonable search range can be selected.",
          "For a bracketing method, values of the function are calculated at the interval endpoints. An interval [a,b] is suitable when the function is continuous and f(a) and f(b) have opposite signs. A table of values can be prepared by testing the function at different x-values. A sign change between two consecutive values gives a possible interval containing a root.",
          "When a question asks for the largest root, the function should be checked over a range wide enough to locate the rightmost root interval. The greatest root means the largest numerical value, not the value with the greatest absolute size. For an open method, a starting estimate should be chosen reasonably close to the required root. The selected value or interval must satisfy the conditions of the method."
        ],
        "formula": [
          "Search for sign changes: f(xᵢ) × f(xᵢ₊₁) < 0",
          "Interval width: b − a",
          "Midpoint estimate: x₀ = (a + b) / 2"
        ],
        "formulaNote": "A sign-change scan may fail to detect an even-multiplicity root, because the function can touch zero and return to the same sign.",
        "example": [
          "For f(x) = x² − 2, test x = 1, 1.5 and 2. The values are −1, 0.25 and 2.",
          "The sign changes between 1 and 1.5, so [1, 1.5] is a valid search interval for the positive root."
        ],
        "steps": [
          "Decide the range in which the required root is expected.",
          "Divide the range into smaller intervals.",
          "Evaluate f(x) at each endpoint.",
          "Record intervals where endpoint values have opposite signs.",
          "Choose the interval or initial estimate that matches the root requested in the question."
        ],
        "points": [
          "The largest root is the greatest root value, not necessarily the root with the largest absolute value.",
          "A sign-change scan is a practical way to locate brackets.",
          "The chosen interval should satisfy the continuity and sign-change conditions.",
          "Initial values influence the behaviour of open iterative methods."
        ],
        "caution": "Do not select an arbitrary interval without checking f(a) and f(b). For multiple roots, verify which interval corresponds to the requested root.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 0,
            "index": 2
          }
        ]
      },
      {
        "title": "Intermediate Value Theorem",
        "overview": "The Intermediate Value Theorem provides the mathematical reason that a continuous function with opposite signs at the endpoints must cross zero somewhere in the interval.",
        "concept": [
          "The Intermediate Value Theorem is a mathematical result used to show that a continuous function takes every value between its values at two endpoints. For root finding, the important value is zero. If a continuous function has one negative value and one positive value at the endpoints of an interval, it must become zero at least once between those endpoints.",
          "In mathematical form, if f is continuous on [a,b] and f(a) × f(b) is less than zero, then there is at least one number c between a and b for which f(c) = 0. This is the reason that a sign-changing interval is used by Bisection and False Position methods.",
          "The theorem guarantees that at least one root exists in the interval. It does not guarantee that there is only one root. There may be two or more roots in the same interval. Continuity is also necessary. The theorem must not be used across a point where the function is undefined or discontinuous."
        ],
        "formula": [
          "If f is continuous on [a, b] and f(a) × f(b) < 0, then there exists c ∈ (a, b) such that f(c) = 0."
        ],
        "formulaNote": "Continuity on the whole interval is essential. A discontinuous function can have opposite endpoint signs without a root between them.",
        "example": [
          "For f(x) = x² − 2 on [1, 2], f is continuous, f(1) = −1 and f(2) = 2.",
          "Since the signs are opposite, at least one root exists between 1 and 2."
        ],
        "steps": [
          "Confirm that the function is continuous on the complete interval.",
          "Evaluate the function at both endpoints.",
          "Check that the product of endpoint values is negative.",
          "Conclude that at least one root exists inside the interval."
        ],
        "points": [
          "The theorem establishes root existence.",
          "Continuity is required.",
          "A sign change does not prove uniqueness.",
          "This theorem supports bisection and false-position methods."
        ],
        "caution": "Do not apply the theorem across a point where the function is undefined or discontinuous.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 0,
            "index": 1
          }
        ]
      },
      {
        "title": "Termination Criteria in Root-Finding Methods",
        "overview": "An iterative algorithm needs a clear rule for deciding when the approximation is sufficiently accurate and the iterations should stop.",
        "concept": [
          "An iterative method produces one approximation after another. It must have a termination criterion so that the calculation knows when to stop. Without a stopping rule, the program may continue for too long or may never stop when the method does not converge. The stopping criterion is selected according to the method and the accuracy required by the question.",
          "A tolerance is a small positive number that represents the allowed difference or error. A method may stop when the interval becomes sufficiently narrow, when the function value is close to zero, or when two successive estimates are very close. For Bisection, the interval half-width is a useful stopping measure. For Newton–Raphson, the difference between two successive estimates is often checked.",
          "A maximum number of iterations can also be used as a safety limit. It prevents a program from running forever if convergence does not happen. The final value should be substituted into the original function whenever possible. A small change between two estimates is useful, but it does not always prove that the true root error is equally small."
        ],
        "formula": [
          "Interval test: (b − a) / 2 ≤ ε",
          "Step test: |xₙ₊₁ − xₙ| ≤ ε",
          "Residual test: |f(xₙ₊₁)| ≤ ε"
        ],
        "formulaNote": "ε is a positive tolerance chosen for the required accuracy. A residual alone may not always equal the true root error.",
        "example": [
          "If the required tolerance is 0.001 and the bisection half-width is 0.0008, the interval-width stopping test is satisfied.",
          "If successive Newton estimates differ by 0.0002 and ε = 0.001, the step-size test is satisfied."
        ],
        "steps": [
          "Choose a positive tolerance before starting.",
          "Calculate the next approximation.",
          "Evaluate the method-specific stopping test.",
          "Stop when the test is satisfied or when the maximum iteration count is reached.",
          "Report whether convergence was achieved."
        ],
        "points": [
          "Tolerance controls the desired numerical accuracy.",
          "A smaller tolerance usually requires more iterations.",
          "A maximum iteration limit protects the program.",
          "The final result should be checked in the original function."
        ],
        "caution": "Do not compare a signed difference directly with a positive tolerance. Use an absolute value so the stopping test works in both directions.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 0,
            "index": 2
          }
        ]
      },
      {
        "title": "Bisection Method",
        "overview": "The Bisection Method repeatedly halves a valid sign-changing interval. It is simple and reliable when the function is continuous and the initial bracket is valid.",
        "concept": [
          "The Bisection Method is a bracketing method used to find a real root of an equation f(x) = 0. It starts with two values a and b for which the function has opposite signs. If the function is continuous between these values, at least one root lies inside the interval. The method does not require the derivative of the function.",
          "The midpoint of the interval is calculated by c = (a+b)/2. The function is then evaluated at c. If f(a) and f(c) have opposite signs, the root lies in the left half and the new interval becomes [a,c]. Otherwise, the root lies in the right half and the new interval becomes [c,b]. This process is repeated, so the interval becomes half as wide after every iteration.",
          "The method is simple and reliable when the starting interval is valid. Its main disadvantage is that it may need more iterations than faster methods. The process stops when the interval half-width or another required error measure becomes smaller than the tolerance. The midpoint or final interval is then reported as the approximate root."
        ],
        "formula": [
          "c = (a + b) / 2",
          "If f(a) × f(c) < 0, set b = c; otherwise set a = c.",
          "Stop when (b − a) / 2 ≤ ε or another stated criterion is met."
        ],
        "formulaNote": "The endpoints must initially satisfy f(a) × f(b) < 0, and f must be continuous on the interval.",
        "example": [
          "Solve f(x) = x² − 2 in [1, 2]. The first midpoint is c = (1 + 2)/2 = 1.5.",
          "Since f(1.5) = 0.25 and f(1) = −1, the new interval is [1, 1.5]. Repeat until the tolerance is reached."
        ],
        "steps": [
          "Choose a and b such that f(a) and f(b) have opposite signs.",
          "Calculate c = (a + b)/2.",
          "Evaluate f(c). If f(c) is sufficiently close to zero, stop.",
          "Replace the endpoint that has the same sign as f(c) with c.",
          "Repeat until the interval-width or tolerance condition is satisfied."
        ],
        "points": [
          "Bisection is a bracketing method.",
          "It does not require a derivative.",
          "The interval is halved in every iteration.",
          "It converges for a continuous function with a valid sign-changing bracket."
        ],
        "caution": "Check the initial signs before starting. If f(a) and f(b) have the same sign, ordinary bisection is not justified by the sign-change theorem.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 0
          }
        ]
      },
      {
        "title": "False Position Method (Regula Falsi)",
        "overview": "The False Position Method estimates the root by drawing a straight line through the two endpoint function values and using the x-intercept of that line.",
        "concept": [
          "The False Position Method is also called the Regula Falsi Method. It is a bracketing method because it begins with two endpoints a and b where the function values have opposite signs. It uses the values of the function at these endpoints to estimate the root. The method does not need the derivative of the function.",
          "A straight line is drawn through the two points (a, f(a)) and (b, f(b)). The point where this line crosses the x-axis is taken as the next approximation. Its formula is different from the midpoint formula used in Bisection. After finding the new point c, the function is evaluated at c and the endpoint with the same sign as f(c) is replaced.",
          "The sign-changing interval is kept during the calculation, which makes the method safer than many open methods. It can be faster than Bisection for some functions. However, one endpoint may stay unchanged for many iterations, which can slow the method. The calculation stops when the function value or the change in the estimate becomes smaller than the given tolerance."
        ],
        "formula": [
          "c = (a f(b) − b f(a)) / (f(b) − f(a))",
          "Keep the endpoint pair for which the function values have opposite signs."
        ],
        "formulaNote": "The denominator must not be zero. A valid sign-changing interval is required initially.",
        "example": [
          "For f(x) = x² − 2 on [1, 2], f(1) = −1 and f(2) = 2.",
          "c = [1(2) − 2(−1)] / [2 − (−1)] = 4/3 ≈ 1.3333.",
          "Evaluate f(c) and retain the half-interval that brackets the root."
        ],
        "steps": [
          "Choose a and b with f(a) × f(b) < 0.",
          "Calculate the false-position estimate using the endpoint formula.",
          "Evaluate the function at the new estimate.",
          "Replace the endpoint having the same sign as the new function value.",
          "Repeat until the function value or estimate change meets the tolerance."
        ],
        "points": [
          "False position is also called Regula Falsi.",
          "It uses a secant-line intercept.",
          "It keeps a valid root bracket.",
          "It does not require a derivative."
        ],
        "caution": "Do not use the midpoint formula for false position. The secant-intercept formula uses both endpoint function values.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 1
          }
        ]
      },
      {
        "title": "Newton–Raphson Method",
        "overview": "Newton–Raphson uses the tangent at the current estimate to produce the next estimate. It can converge very quickly when the initial guess is suitable.",
        "concept": [
          "The Newton–Raphson Method is an open iterative method for finding a root of f(x) = 0. It uses the function and its first derivative. The method starts with an initial estimate x₀. A tangent is drawn to the curve at the current estimate, and the point where this tangent meets the x-axis gives the next estimate.",
          "The formula is x(next) = x - f(x)/f′(x). The process is repeated by using the new estimate in the same formula. When the starting estimate is close to a simple root and the derivative is suitable, the method often converges very quickly. This is one of the main advantages of Newton–Raphson.",
          "The method also has limitations. It can fail if the derivative is zero or very small because division by that value becomes unsafe. A poor starting estimate may move the calculation away from the required root or towards another root. A suitable initial estimate, a positive tolerance and a check on the derivative are important for a reliable calculation."
        ],
        "formula": [
          "xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)",
          "For f(x) = x² − 2:  f′(x) = 2x"
        ],
        "formulaNote": "The derivative must be available and should not be zero or extremely small near an iteration point.",
        "example": [
          "For f(x) = x² − 2 with x₀ = 1.5, f(1.5) = 0.25 and f′(1.5) = 3.",
          "x₁ = 1.5 − 0.25/3 = 1.416667 approximately.",
          "Further iterations move toward √2 ≈ 1.414214."
        ],
        "steps": [
          "Find f(x) and its derivative f′(x).",
          "Choose an initial estimate x₀.",
          "Calculate xₙ₊₁ using the Newton formula.",
          "Check the derivative and the stopping condition.",
          "Repeat until the desired tolerance is reached."
        ],
        "points": [
          "Newton–Raphson is an open method.",
          "It requires a first derivative.",
          "It often has rapid local convergence near a simple root.",
          "A poor initial guess can cause divergence or convergence to another root."
        ],
        "caution": "Always guard against a zero or very small derivative in a computer program. Do not divide by a value that is effectively zero.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 2
          }
        ]
      },
      {
        "title": "Birge–Vieta Method",
        "overview": "Birge–Vieta is an iterative method for finding a root of a polynomial. It combines synthetic division with a Newton-like correction without separately differentiating the polynomial by hand.",
        "concept": [
          "The Birge–Vieta Method is an iterative method used to find a root of a polynomial equation. It is closely related to the Newton–Raphson Method, but it uses the polynomial coefficients and synthetic division to calculate the values needed for the next estimate. This makes it useful when a polynomial is given in coefficient form.",
          "The coefficients are written in order from the highest power of x to the constant term. At a current estimate x, a first recurrence produces values related to synthetic division. The last value gives the value of the polynomial at x. A second recurrence produces derivative-related values. These values are used in a Newton-like correction to calculate the next estimate.",
          "The process is repeated until the difference between successive estimates is within the required tolerance or the maximum number of iterations is reached. The initial estimate affects which root is found. The coefficient order must be correct, and the correction denominator must not be zero or too small. Birge–Vieta is intended for polynomial equations, not for every type of transcendental equation."
        ],
        "formula": [
          "b₀ = a₀;  bᵢ = aᵢ + x bᵢ₋₁",
          "c₀ = b₀;  cᵢ = bᵢ + x cᵢ₋₁",
          "xₙ₊₁ = xₙ − bₙ / cₙ₋₁"
        ],
        "formulaNote": "Coefficients a₀ … aₙ are ordered from the highest power to the constant term. The denominator must not be zero or extremely small.",
        "example": [
          "Consider p(x) = x³ − 6x² + 11x − 6. Its roots are 1, 2 and 3.",
          "Using an initial estimate near one of the roots, the synthetic-division recurrences produce a correction. Repeating the correction approaches a root near the selected starting value."
        ],
        "steps": [
          "Read the polynomial degree and coefficients from highest power to constant term.",
          "Choose an initial estimate x₀ and a positive tolerance.",
          "Calculate the b-values using synthetic division.",
          "Calculate the c-values using the derivative recurrence.",
          "Update x using x − bₙ/cₙ₋₁ and repeat until convergence."
        ],
        "points": [
          "Birge–Vieta is designed for polynomial equations.",
          "It uses the coefficients directly.",
          "Its update is closely related to Newton–Raphson.",
          "Different initial estimates can converge to different roots."
        ],
        "caution": "Check the coefficient order carefully. Entering the polynomial coefficients in reverse order changes the equation being solved.",
        "programs": [
          {
            "type": "legacy",
            "group": 0,
            "index": 3
          }
        ]
      }
    ]
  },
  {
    "title": "Simultaneous Linear Equations and Interpolation",
    "shortTitle": "Linear Equations and Interpolation",
    "description": "Solve systems of linear equations using direct and iterative methods, then estimate unknown values using interpolation techniques.",
    "topics": [
      {
        "title": "Simultaneous Linear Equations: Direct and Iterative Methods",
        "overview": "A system of simultaneous linear equations contains multiple linear equations with common unknowns. Direct and iterative methods are two main approaches to solving such systems.",
        "concept": [
          "Simultaneous linear equations are two or more linear equations that contain the same unknown variables. A solution is a set of values that satisfies every equation at the same time. For example, the values of x and y must make both equations in a two-equation system true. A system with n equations and n unknowns can be written in matrix form as AX = B.",
          "The matrix A contains the coefficients of the unknown variables, X contains the unknowns and B contains the constant values on the right side. Direct methods use a fixed sequence of operations to obtain the solution. Gauss Elimination and Gauss–Jordan are direct methods. They use row operations on an augmented matrix.",
          "Iterative methods start with an initial estimate of the unknowns and improve the values repeatedly. Gauss–Seidel is an iterative method. It uses newly calculated values immediately in the next calculation of the same iteration. Direct and iterative methods have different steps, but the final values should satisfy the original equations. Substitution into the original equations is an important check."
        ],
        "formula": [
          "AX = B",
          "A = coefficient matrix;  X = unknown vector;  B = constant vector"
        ],
        "formulaNote": "A unique solution generally requires a non-singular coefficient matrix. Special systems may have no solution or infinitely many solutions.",
        "example": [
          "The pair 2x + y = 5 and x − y = 1 forms a simultaneous linear system.",
          "Both equations must be satisfied by the same values of x and y. Solving gives x = 2 and y = 1."
        ],
        "steps": [
          "Write the equations in a consistent variable order.",
          "Form the augmented matrix or coefficient matrix and right-hand-side vector.",
          "Choose a direct or iterative method.",
          "Calculate the unknowns and substitute them into the original equations to verify the solution."
        ],
        "points": [
          "Direct methods include Gauss elimination and Gauss–Jordan.",
          "Gauss–Seidel is an iterative method.",
          "Pivoting helps control numerical problems during elimination.",
          "Always check the solution in the original equations."
        ],
        "caution": "Keep the order of variables consistent in every row. A misplaced coefficient changes the system.",
        "programs": [
          {
            "type": "legacy",
            "group": 1,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 1,
            "index": 1
          },
          {
            "type": "legacy",
            "group": 1,
            "index": 2
          }
        ]
      },
      {
        "title": "Gauss Elimination Method",
        "overview": "Gauss elimination transforms the augmented matrix into upper triangular form and then uses back substitution to calculate the unknowns.",
        "concept": [
          "Gauss Elimination is a direct method for solving simultaneous linear equations. The equations are first written as an augmented matrix. The augmented matrix contains the coefficients of all unknowns and the constants from the right side of each equation. The aim is to change this matrix into upper triangular form by using row operations.",
          "In the elimination stage, the elements below each leading diagonal element, called a pivot, are made zero. This is done one column at a time. After the matrix becomes upper triangular, the last equation contains only the last unknown. That unknown is calculated first, and its value is used to calculate the previous unknowns. This reverse process is called back substitution.",
          "Gauss Elimination is useful for systems containing several linear equations. A zero pivot cannot be used as a divisor, so a suitable row interchange may be needed. Very small pivots can also affect numerical accuracy. After finding the unknowns, their values should be placed into the original equations to check the solution."
        ],
        "formula": [
          "Augmented matrix: [A | B]",
          "Elimination factor: mᵢₖ = aᵢₖ / aₖₖ",
          "Row operation: Rᵢ ← Rᵢ − mᵢₖ Rₖ"
        ],
        "formulaNote": "After forward elimination, solve the upper triangular system by back substitution.",
        "example": [
          "For a system with three unknowns, eliminate x from rows 2 and 3 using row 1, then eliminate y from row 3 using row 2.",
          "The resulting triangular system is solved from the last row upward."
        ],
        "steps": [
          "Form the augmented matrix.",
          "Select a non-zero pivot in the first column.",
          "Eliminate entries below the pivot using row operations.",
          "Continue for each pivot column.",
          "Use back substitution to calculate the unknowns."
        ],
        "points": [
          "Gauss elimination creates an upper triangular matrix.",
          "Back substitution is required after forward elimination.",
          "Row operations preserve the solution when performed correctly.",
          "Pivoting can improve numerical stability."
        ],
        "caution": "Do not divide by a zero pivot. Check whether row swapping or another method is required.",
        "programs": [
          {
            "type": "legacy",
            "group": 1,
            "index": 0
          }
        ]
      },
      {
        "title": "Concept of Pivoting",
        "overview": "Pivoting changes the order of rows or columns so that a safer pivot is used during elimination. Partial pivoting normally selects the largest absolute entry in the current column from the rows still available.",
        "concept": [
          "Pivoting is a step used in solving linear equations by elimination methods. A pivot is the element used to eliminate other values in its column. If the pivot is zero, division by that pivot is not possible. If the pivot is very small, the calculations may produce large numerical errors.",
          "In partial pivoting, the entries in the current column from the current row downwards are compared by their absolute values. The row containing the largest absolute value is moved into the pivot position. The elimination process is then continued using the selected pivot. Absolute value is used so that a large negative number can be selected correctly.",
          "Swapping two equations does not change the solution of the system, so row interchange is allowed. Pivoting helps avoid zero pivots and can improve numerical reliability. It is commonly used with Gauss Elimination and Gauss–Jordan methods. Pivoting does not itself solve the equations; it makes the elimination process safer."
        ],
        "formula": [
          "Choose pivot row p such that |aₚₖ| = max |aᵢₖ| for i = k … n",
          "Swap Rₚ and Rₖ when p ≠ k"
        ],
        "formulaNote": "Partial pivoting is performed column by column. Complete pivoting may also interchange columns, which requires tracking variable order.",
        "example": [
          "Consider the first-column entries 0 and 2. The first row has a zero pivot, so it cannot be used for elimination.",
          "Swap the row containing 2 into the first pivot position, then continue the elimination."
        ],
        "steps": [
          "Move to the current pivot column.",
          "Find the largest absolute entry among the remaining rows in that column.",
          "Swap that row with the current pivot row.",
          "Perform the elimination steps using the new pivot.",
          "Continue through the remaining columns."
        ],
        "points": [
          "Pivoting avoids division by zero pivots.",
          "Partial pivoting can reduce the effect of round-off error.",
          "Swapping rows preserves the solution set.",
          "A pivot should be checked before division."
        ],
        "caution": "Choose the largest absolute value, not simply the largest signed value. For example, |−8| is greater than |5|.",
        "programs": [
          {
            "type": "legacy",
            "group": 1,
            "index": 0
          }
        ]
      },
      {
        "title": "Gauss–Jordan Method",
        "overview": "Gauss–Jordan elimination continues row operations until the coefficient matrix is reduced to the identity matrix. The solution can then be read directly from the augmented column.",
        "concept": [
          "Gauss–Jordan is a direct method for solving simultaneous linear equations. Like Gauss Elimination, it starts with an augmented matrix. The aim is to change the coefficient part of the matrix into an identity matrix. When this form is reached, the values of the unknown variables can be read directly from the last column.",
          "First, a non-zero pivot is selected. The complete pivot row is divided by the pivot value so that the pivot becomes one. Then the other entries in the same pivot column are made zero. This elimination is performed both above and below the pivot, not only below it. The same process is repeated for every variable column.",
          "The main difference from ordinary Gauss Elimination is that Gauss–Jordan continues the row operations until the identity matrix is obtained. Therefore, a separate back-substitution step is not required. If a pivot is zero or unsuitable, rows may need to be interchanged. The final values should be checked in the original equations."
        ],
        "formula": [
          "Normalize pivot row: Rₖ ← Rₖ / aₖₖ",
          "Eliminate other rows: Rᵢ ← Rᵢ − aᵢₖ Rₖ,  i ≠ k",
          "Final form: [I | X]"
        ],
        "formulaNote": "A valid non-zero pivot is required. Pivoting can also be used before normalizing a row.",
        "example": [
          "For a two-variable system, apply row operations until the augmented matrix has the form [1 0 | x] and [0 1 | y].",
          "The right-hand column then gives the values of x and y directly."
        ],
        "steps": [
          "Write the augmented matrix.",
          "Select a non-zero pivot and swap rows if needed.",
          "Divide the pivot row by the pivot to make the pivot one.",
          "Eliminate the pivot-column entries in every other row.",
          "Repeat until the coefficient matrix is the identity matrix."
        ],
        "points": [
          "Gauss–Jordan is a direct method.",
          "Every pivot is normalized to one.",
          "Entries above and below each pivot are eliminated.",
          "The solution is read directly without back substitution."
        ],
        "caution": "Do not eliminate only the entries below the pivot. Gauss–Jordan eliminates all other entries in the pivot column.",
        "programs": [
          {
            "type": "legacy",
            "group": 1,
            "index": 1
          }
        ]
      },
      {
        "title": "Gauss–Seidel Iterative Method",
        "overview": "Gauss–Seidel solves a linear system by updating one unknown at a time and immediately using each newly calculated value in the next equation.",
        "concept": [
          "The Gauss–Seidel Method is an iterative method for solving a system of linear equations. It starts with an initial value for every unknown. Each equation is rearranged so that one variable is written in terms of the other variables. New values are then calculated one by one.",
          "The important feature of Gauss–Seidel is that a new value is used immediately in the remaining calculations of the same iteration. For example, after calculating a new value of x, that value is used while calculating y. This is different from the Jacobi method, which uses only the values from the previous iteration until the next full set is ready.",
          "The process continues until the changes in the unknowns become smaller than a chosen tolerance or the allowed number of iterations is reached. Diagonal dominance is a common condition that supports convergence, although it is not required in every possible case. The result is approximate and should be checked by substituting it into the original equations."
        ],
        "formula": [
          "xᵢ⁽ᵏ⁺¹⁾ = [bᵢ − Σⱼ<ᵢ aᵢⱼxⱼ⁽ᵏ⁺¹⁾ − Σⱼ>ᵢ aᵢⱼxⱼ⁽ᵏ⁾] / aᵢᵢ",
          "Stop when max |xᵢ⁽ᵏ⁺¹⁾ − xᵢ⁽ᵏ⁾| < ε"
        ],
        "formulaNote": "The first summation uses the newest values from the current iteration. The second uses values from the previous iteration.",
        "example": [
          "For 4x + y = 9 and x + 3y = 7, rearrange to x = (9 − y)/4 and y = (7 − x)/3.",
          "Starting with x₀ = 0 and y₀ = 0, calculate x₁ = 2.25, then use that new x₁ to calculate y₁ = 1.5833 approximately."
        ],
        "steps": [
          "Rearrange the equations to express each variable in terms of the others.",
          "Choose initial values for all unknowns.",
          "Calculate the first variable using current available values.",
          "Use each newly calculated value immediately in the next equation.",
          "Repeat until the maximum change in the variables is below the tolerance."
        ],
        "points": [
          "Gauss–Seidel is an iterative method.",
          "New values are used immediately within the same iteration.",
          "A suitable initial estimate and convergence condition are needed.",
          "Diagonal dominance often supports convergence."
        ],
        "caution": "Do not calculate every variable using only the old iteration values; that would follow the Jacobi update pattern rather than Gauss–Seidel.",
        "programs": [
          {
            "type": "legacy",
            "group": 1,
            "index": 2
          }
        ]
      },
      {
        "title": "Interpolation and Extrapolation",
        "overview": "Interpolation estimates a value inside the range of known data. Extrapolation estimates a value outside that range.",
        "concept": [
          "Interpolation is a numerical method used to estimate an unknown value between known data points. A table may contain values of x and their corresponding values of y, but the exact x-value required in a question may not be listed. Interpolation uses the available data to estimate the corresponding y-value inside the given range.",
          "Extrapolation is used when the required value lies outside the range of the known data. It uses the same general idea as interpolation, but it is usually less reliable because the pattern of the data may change outside the observed range. The farther the required value is from the known data, the more carefully the result should be treated.",
          "Common polynomial interpolation methods in this syllabus are Newton Forward, Newton Backward, Newton Divided Difference and Lagrange interpolation. The method is selected according to the spacing of the x-values and the position of the required value. Equal spacing is important for the standard forward and backward difference formulas, while divided differences and Lagrange interpolation can handle unequal spacing."
        ],
        "formula": [
          "Interpolation: x lies within the range of known x-values",
          "Extrapolation: x lies outside the range of known x-values"
        ],
        "formulaNote": "Interpolation and extrapolation describe where the estimate is made; they are not single algorithms.",
        "example": [
          "Known observations are (1, 2), (2, 4) and (3, 6). Estimating y at x = 2.5 is interpolation.",
          "Estimating y at x = 5 is extrapolation because 5 lies outside the observed x-range from 1 to 3."
        ],
        "steps": [
          "Arrange the observations in a table.",
          "Check whether the required x-value lies inside or outside the data range.",
          "Choose an interpolation formula suited to the data spacing.",
          "Calculate the estimate and state whether it is interpolation or extrapolation."
        ],
        "points": [
          "Interpolation is within the known data range.",
          "Extrapolation is outside the known data range.",
          "Equal spacing enables forward and backward difference formulas.",
          "Extrapolation is generally more sensitive to the assumed data pattern."
        ],
        "caution": "Do not call an estimate interpolation if the requested point lies outside the range of the given x-values.",
        "programs": [
          {
            "type": "legacy",
            "group": 3,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 3,
            "index": 1
          }
        ]
      },
      {
        "title": "Finite Differences: Forward and Backward Tables",
        "overview": "Finite-difference tables organise changes between neighbouring y-values. They are used in interpolation when the independent-variable values are equally spaced.",
        "concept": [
          "A finite-difference table is used to organise changes in a sequence of y-values. It is useful when the x-values are equally spaced. The first forward difference is found by subtracting one y-value from the previous y-value in the forward direction. In symbols, Δyᵢ = yᵢ₊₁ - yᵢ.",
          "Higher forward differences are calculated by finding differences between the values in the previous difference column. The same process can be repeated to obtain second, third and further differences. A backward difference is calculated in the opposite direction by subtracting the previous value from the current value. Its formula is ∇yᵢ = yᵢ - yᵢ₋₁.",
          "For data produced by a polynomial, the differences show a useful pattern. For example, the second differences of a quadratic data set are constant. These tables provide the values required by Newton Forward and Newton Backward interpolation. The rows and columns must be kept aligned carefully so that each difference belongs to the correct data point."
        ],
        "formula": [
          "Forward: Δyᵢ = yᵢ₊₁ − yᵢ",
          "Second forward difference: Δ²yᵢ = Δyᵢ₊₁ − Δyᵢ",
          "Backward: ∇yᵢ = yᵢ − yᵢ₋₁"
        ],
        "formulaNote": "Forward and backward difference tables are most directly used when the x-values are equally spaced.",
        "example": [
          "For y-values 1, 2, 5, the first forward differences are 2 − 1 = 1 and 5 − 2 = 3.",
          "The second forward difference is 3 − 1 = 2."
        ],
        "steps": [
          "Write x and y values in increasing order of x.",
          "Calculate each first forward difference by subtracting consecutive y-values.",
          "Repeat the process on the difference column to calculate higher differences.",
          "For a backward table, calculate each value minus the preceding value.",
          "Use the required difference values in the interpolation formula."
        ],
        "points": [
          "Forward differences use the next value.",
          "Backward differences use the previous value.",
          "Higher differences are calculated recursively.",
          "Equal spacing is required for the standard Newton forward and backward formulas."
        ],
        "caution": "Do not mix forward and backward difference signs. Keep the table columns aligned with the original data rows.",
        "programs": [
          {
            "type": "legacy",
            "group": 2,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 2,
            "index": 1
          }
        ]
      },
      {
        "title": "Divided Difference Tables",
        "overview": "Divided differences extend difference-table ideas to data points that may not be equally spaced.",
        "concept": [
          "A divided-difference table is used to find the coefficients required by Newton Divided-Difference interpolation. It is similar to a finite-difference table, but it can be used when the x-values are not equally spaced. This makes it useful for data collected at irregular intervals.",
          "The first divided difference between two points is the change in the y-values divided by the change in the x-values. It is the slope of the line joining those two points. Higher divided differences are calculated from the previous column by taking the difference between two related values and dividing by the difference between their outer x-values.",
          "The first value in each divided-difference column is used as a coefficient in Newton’s divided-difference polynomial. The table can be extended when a new data point is added. All x-values must be distinct because a repeated x-value would make a denominator zero. Care must be taken to use the correct order of values in every calculation."
        ],
        "formula": [
          "f[xᵢ, xᵢ₊₁] = [f(xᵢ₊₁) − f(xᵢ)] / [xᵢ₊₁ − xᵢ]",
          "f[x₀, …, xₙ] = [f[x₁, …, xₙ] − f[x₀, …, xₙ₋₁]] / (xₙ − x₀)"
        ],
        "formulaNote": "The x-values in a divided-difference denominator must be distinct.",
        "example": [
          "For points (1, 1), (2, 4), the first divided difference is (4 − 1)/(2 − 1) = 3.",
          "For points (2, 4), (3, 9), it is (9 − 4)/(3 − 2) = 5. The second divided difference is (5 − 3)/(3 − 1) = 1."
        ],
        "steps": [
          "List the x-values and their corresponding function values.",
          "Calculate first divided differences for neighbouring points.",
          "Calculate second and higher divided differences using the recurrence.",
          "Use the first entry in each column as the coefficient in Newton's polynomial."
        ],
        "points": [
          "Divided differences allow unequal x-spacing.",
          "The first divided difference is a slope.",
          "Higher orders are calculated recursively.",
          "The table is used by Newton's divided-difference formula."
        ],
        "caution": "Check the order of x-values and denominators. A repeated x-value causes division by zero in the standard divided-difference formula.",
        "programs": [
          {
            "type": "legacy",
            "group": 2,
            "index": 2
          }
        ]
      },
      {
        "title": "Newton Forward and Newton Backward Interpolation",
        "overview": "Newton forward interpolation is suitable near the beginning of an equally spaced data table. Newton backward interpolation is suitable near the end.",
        "concept": [
          "Newton Forward and Newton Backward are interpolation methods used when the x-values in the data table are equally spaced. The constant difference between two consecutive x-values is called h. Both methods use finite-difference tables, but they start from different ends of the table.",
          "Newton Forward interpolation is generally used when the required x-value is near the beginning of the table. It starts with the first y-value and uses forward differences. The quantity u is calculated by subtracting the first x-value from the required x-value and dividing by h. The forward formula then uses the first entries of the difference columns.",
          "Newton Backward interpolation is generally used when the required x-value is near the end of the table. It starts with the last y-value and uses backward differences. In this case, u is calculated using the last x-value. The correct formula should be selected according to the position of the required value, and the spacing of the data must be checked before starting."
        ],
        "formula": [
          "Forward: y = y₀ + uΔy₀ + [u(u−1)/2!]Δ²y₀ + …",
          "Backward: y = yₙ + u∇yₙ + [u(u+1)/2!]∇²yₙ + …",
          "u = (x − x₀)/h  for forward;  u = (x − xₙ)/h  for backward"
        ],
        "formulaNote": "h is the constant interval between consecutive x-values. Continue the series using the appropriate higher-order differences.",
        "example": [
          "Given (0,1), (1,2), (2,5), the forward differences are Δy₀ = 1 and Δ²y₀ = 2.",
          "At x = 0.5, h = 1 and u = 0.5. Newton forward gives y = 1 + 0.5(1) + [0.5(−0.5)/2](2) = 1.25."
        ],
        "steps": [
          "Check that the x-values are equally spaced.",
          "Choose forward interpolation for a value near the start or backward interpolation for a value near the end.",
          "Construct the required difference table.",
          "Calculate u using the correct starting point.",
          "Substitute the differences into the appropriate Newton formula."
        ],
        "points": [
          "Both formulas require equally spaced x-values.",
          "Forward interpolation starts at the first entry.",
          "Backward interpolation starts at the last entry.",
          "The choice is based on the position of the required x-value."
        ],
        "caution": "Do not use u = (x − x₀)/h in the backward formula. The backward formula uses the last x-value xₙ.",
        "programs": [
          {
            "type": "legacy",
            "group": 2,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 2,
            "index": 1
          }
        ]
      },
      {
        "title": "Newton Divided-Difference Interpolation",
        "overview": "Newton's divided-difference polynomial estimates a value from distinct data points and works even when the x-values are not equally spaced.",
        "concept": [
          "Newton Divided-Difference interpolation constructs a polynomial from a set of known data points. It is useful when the x-values are not equally spaced, so the ordinary forward or backward difference formulas cannot be used directly. The method first prepares a divided-difference table and then uses its first entries as polynomial coefficients.",
          "The first term of the polynomial is the first y-value. The next term contains the first divided difference multiplied by (x - x₀). The following term contains a second divided difference multiplied by (x - x₀)(x - x₁). Each higher term adds one more factor involving the next x-value. This pattern continues until the required order is reached.",
          "The resulting polynomial passes through all the given data points when their x-values are distinct. To estimate a value, the required x is substituted into the polynomial. If another data point is added, another term can be added to extend the polynomial. The method is flexible because it does not require equal spacing."
        ],
        "formula": [
          "Pₙ(x) = f[x₀] + (x − x₀)f[x₀,x₁]",
          "+ (x − x₀)(x − x₁)f[x₀,x₁,x₂] + …"
        ],
        "formulaNote": "The polynomial continues with one additional factor (x − xₖ) for each higher-order term.",
        "example": [
          "For the points (1,1), (2,4), (3,9), the first divided differences are 3 and 5, and the second divided difference is 1.",
          "The polynomial is P₂(x) = 1 + 3(x − 1) + 1(x − 1)(x − 2), which simplifies to x²."
        ],
        "steps": [
          "Write all given data points.",
          "Construct the divided-difference table.",
          "Take the first entry from each divided-difference column.",
          "Substitute these coefficients into Newton's polynomial.",
          "Put the required x-value into the polynomial."
        ],
        "points": [
          "The method accepts unequal x-spacing.",
          "It uses divided-difference coefficients.",
          "The polynomial passes through the supplied data points when constructed with distinct x-values.",
          "The order of data points changes the table layout but not the final interpolating polynomial."
        ],
        "caution": "Do not use the equally spaced forward-difference formula when the data spacing is unequal. Use divided differences instead.",
        "programs": [
          {
            "type": "legacy",
            "group": 2,
            "index": 2
          },
          {
            "type": "legacy",
            "group": 3,
            "index": 0
          }
        ]
      },
      {
        "title": "Lagrange's Interpolation Method",
        "overview": "Lagrange interpolation constructs a polynomial directly from the data points using basis polynomials. It does not require a difference table.",
        "concept": [
          "Lagrange interpolation is a method of constructing a polynomial that passes through all the given data points. It is useful when the x-values are unequally spaced. Unlike Newton Forward and Backward methods, it does not need a finite-difference table. The polynomial is made by adding a group of basis polynomials, each multiplied by its corresponding y-value.",
          "Each basis polynomial is designed to have the value one at its own data point and zero at all the other given data points. Because of this property, when the complete polynomial is evaluated at a known x-value, it gives the matching y-value from the table. The formula uses products of terms involving the required x and the other x-values.",
          "All given x-values must be different so that no denominator becomes zero. The method works with equally spaced and unequally spaced data. It is easy to understand for a small number of points, although writing the full expression can become lengthy when many data points are used. The required x-value is substituted after the basis terms are calculated."
        ],
        "formula": [
          "Pₙ(x) = Σᵢ₌₀ⁿ yᵢ Lᵢ(x)",
          "Lᵢ(x) = Πⱼ≠ᵢ (x − xⱼ) / (xᵢ − xⱼ)"
        ],
        "formulaNote": "All x-values must be distinct so that the denominators are non-zero.",
        "example": [
          "For points (1,1), (2,4), (3,9), the interpolating polynomial is x².",
          "At x = 2.5, the estimated value is P₂(2.5) = 6.25."
        ],
        "steps": [
          "List the data points (xᵢ, yᵢ).",
          "For each point, construct its basis polynomial Lᵢ(x).",
          "Multiply each basis polynomial by its corresponding y-value.",
          "Add all terms to form Pₙ(x).",
          "Substitute the required x-value to obtain the estimate."
        ],
        "points": [
          "Lagrange interpolation works with unequal spacing.",
          "It does not require a finite-difference table.",
          "The polynomial passes through every supplied data point.",
          "Repeated x-values are not allowed in the standard formula."
        ],
        "caution": "Keep the denominator terms tied to the correct xᵢ. A single incorrect basis polynomial changes the final interpolation.",
        "programs": [
          {
            "type": "legacy",
            "group": 3,
            "index": 1
          }
        ]
      },
      {
        "title": "Inverse Interpolation",
        "overview": "Inverse interpolation estimates x when a value of y is given. It reverses the usual role of the independent and dependent variables.",
        "concept": [
          "In ordinary interpolation, the value of x is known and the corresponding value of y is estimated. In inverse interpolation, the value of y is known and the corresponding value of x is required. Therefore, inverse interpolation reverses the usual roles of the independent and dependent variables.",
          "To apply the method, the given data pairs (x,y) are rearranged as (y,x). The required y-value is then treated like the input value, and x is treated as the value to be estimated. A suitable interpolation formula, such as Newton Divided Difference or Lagrange interpolation, can be applied to the reversed data.",
          "The relationship should be suitable for finding one x-value from the selected y-value. If the same y-value occurs at more than one x-value, the problem may have more than one possible answer. In that case, the correct interval or branch must be selected before interpolation. The estimated x-value should be checked against the original data trend."
        ],
        "formula": [
          "Given points (xᵢ, yᵢ), construct x = g(y)",
          "Estimate x* = g(y*) for the specified value y*"
        ],
        "formulaNote": "The interpolation formula used for g may be Newton's divided difference or Lagrange, depending on the data.",
        "example": [
          "Suppose a table gives x-values 1, 2, 3 and corresponding y-values 2, 5, 10.",
          "If y = 7 is specified, reverse the pairs to (2,1), (5,2), (10,3), then interpolate x as a function of y."
        ],
        "steps": [
          "Write the observed pairs (x, y).",
          "Interchange the roles of x and y to form (y, x) data.",
          "Check that the reversed data have a suitable single-valued trend.",
          "Apply a suitable interpolation formula to estimate x at the required y.",
          "State the estimated x-value and the method used."
        ],
        "points": [
          "Inverse interpolation estimates x from a known y.",
          "The x and y roles are interchanged.",
          "A monotonic local relationship helps avoid ambiguity.",
          "The same interpolation tools can be used after reversing the data."
        ],
        "caution": "If the original data are not one-to-one, the same y-value may correspond to more than one x-value. Select the correct branch or interval before interpolating.",
        "programs": [
          {
            "type": "legacy",
            "group": 3,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 3,
            "index": 1
          }
        ]
      }
    ]
  },
  {
    "title": "Numerical Integration and Ordinary Differential Equations",
    "shortTitle": "Integration and Differential Equations",
    "description": "Approximate definite integrals with Newton–Cotes formulas and solve ordinary differential equations using step-by-step numerical methods.",
    "topics": [
      {
        "title": "Numerical Integration and Newton–Cotes Formulas",
        "overview": "Numerical integration estimates a definite integral from function values. Newton–Cotes formulas approximate the area using equally spaced points and polynomial approximations.",
        "concept": [
          "Numerical integration is used to estimate the value of a definite integral when an exact integration is difficult or not convenient. A definite integral represents the accumulated area under a curve between two limits. Numerical integration estimates this area by using a number of function values at selected points in the interval.",
          "Newton–Cotes formulas are numerical integration formulas that use function values at equally spaced points. They approximate the curve by simple polynomials over small parts of the interval. The Trapezoidal Rule uses straight-line sections. Simpson’s 1/3 Rule uses quadratic approximations, while Simpson’s 3/8 Rule uses cubic approximations.",
          "The interval is divided into smaller subintervals, and the distance between two consecutive points is called the step size h. A smaller step size generally improves the approximation, but it requires more function evaluations. The correct rule must be selected according to the question and the number of subintervals. The final answer is an approximation, not automatically an exact integral."
        ],
        "formula": [
          "I = ∫ₐᵇ f(x) dx",
          "h = (b − a) / n",
          "Newton–Cotes family: Trapezoidal, Simpson's 1/3 and Simpson's 3/8 rules"
        ],
        "formulaNote": "The points xᵢ = a + ih are equally spaced. The required restrictions on n differ between Simpson's rules.",
        "example": [
          "For ∫₀¹ x dx, the exact value is 1/2.",
          "The composite trapezoidal rule with equally spaced points approximates the area by adding trapezoid areas. For a straight-line function, this estimate is exact."
        ],
        "steps": [
          "Identify the integration limits a and b.",
          "Choose the number of subintervals n and calculate h.",
          "Evaluate f(x) at all required equally spaced points.",
          "Apply the selected Newton–Cotes formula.",
          "Check that n satisfies the rule's restrictions."
        ],
        "points": [
          "Numerical integration estimates a definite integral.",
          "Newton–Cotes formulas use equally spaced points.",
          "Trapezoidal and Simpson rules are common closed Newton–Cotes formulas.",
          "The number of subintervals affects accuracy and computational work."
        ],
        "caution": "Do not use an arbitrary n for Simpson's rules. Simpson's 1/3 requires an even number of subintervals, while Simpson's 3/8 requires a multiple of three.",
        "programs": [
          {
            "type": "legacy",
            "group": 4,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 4,
            "index": 1
          },
          {
            "type": "legacy",
            "group": 4,
            "index": 2
          }
        ]
      },
      {
        "title": "Trapezoidal Rule",
        "overview": "The trapezoidal rule approximates the area under a curve by dividing it into trapezoids whose parallel sides are determined by function values at the interval endpoints.",
        "concept": [
          "The Trapezoidal Rule is a numerical method for estimating a definite integral. It divides the interval from a to b into smaller equal subintervals. The curve between two neighbouring points is replaced by a straight line. The area under each straight line forms a trapezoid, and the total area is found by adding the areas of all trapezoids.",
          "The step size is h = (b-a)/n, where n is the number of subintervals. The function values at the two endpoints are given half weight, while all interior function values are given full weight. The composite formula is h multiplied by one-half of the first and last function values plus the sum of all interior values.",
          "The method is simple and can be used for many continuous functions. Its accuracy depends on the shape of the curve and the number of subintervals. If the curve bends strongly between the points, a small number of trapezoids may give a larger error. Using more subintervals normally improves the estimate."
        ],
        "formula": [
          "h = (b − a) / n",
          "I ≈ (h/2) [y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)]"
        ],
        "formulaNote": "yᵢ = f(a + ih). For a single trapezoid, n = 1.",
        "example": [
          "Approximate ∫₀¹ x dx using one trapezoid. Here h = 1, y₀ = 0 and y₁ = 1.",
          "I ≈ (1/2)(0 + 1) = 0.5, which is exact because the graph is a straight line."
        ],
        "steps": [
          "Calculate h = (b − a)/n.",
          "Find the equally spaced x-values.",
          "Evaluate the function at each point.",
          "Add the first and last values once and interior values twice.",
          "Multiply the total by h/2."
        ],
        "points": [
          "The trapezoidal rule uses straight-line segments.",
          "The composite rule can use any positive integer n.",
          "Interior ordinates have coefficient 2.",
          "The first and last ordinates have coefficient 1."
        ],
        "caution": "Do not multiply the endpoint values by 2 in the composite formula. Only the interior values receive coefficient 2.",
        "programs": [
          {
            "type": "legacy",
            "group": 4,
            "index": 0
          }
        ]
      },
      {
        "title": "Simpson's 1/3 Rule",
        "overview": "Simpson's 1/3 rule fits parabolas through groups of three equally spaced points and combines the resulting areas.",
        "concept": [
          "Simpson’s 1/3 Rule is a numerical integration method that estimates the area under a curve by fitting a quadratic polynomial through groups of three equally spaced points. It is generally more accurate than the Trapezoidal Rule for smooth functions when both methods use a comparable step size.",
          "The interval from a to b is divided into n equal subintervals, and n must be a positive even number. The step size is h = (b-a)/n. The first and last function values are used once. Interior values at odd positions are multiplied by 4, and interior values at even positions are multiplied by 2. The complete weighted sum is multiplied by h/3.",
          "The even-number condition is important because the method works with pairs of subintervals. If n is odd, the standard composite Simpson’s 1/3 formula cannot be applied to the complete interval in the usual way. The method gives a good approximation for sufficiently smooth functions, but the result still depends on the step size and the behaviour of the function."
        ],
        "formula": [
          "h = (b − a) / n,  n must be even",
          "I ≈ (h/3) [y₀ + yₙ + 4Σy(odd indices) + 2Σy(even interior indices)]"
        ],
        "formulaNote": "The coefficient 4 applies to odd-indexed interior ordinates; coefficient 2 applies to even-indexed interior ordinates.",
        "example": [
          "Approximate ∫₀¹ x² dx with n = 2. Then h = 0.5 and y₀ = 0, y₁ = 0.25, y₂ = 1.",
          "I ≈ (0.5/3)[0 + 1 + 4(0.25)] = 1/3. This is exact for a quadratic polynomial."
        ],
        "steps": [
          "Choose an even number of subintervals n.",
          "Calculate h and the equally spaced x-values.",
          "Evaluate all function values.",
          "Apply coefficients 1, 4, 2, 4, …, 2, 4, 1.",
          "Multiply the weighted sum by h/3."
        ],
        "points": [
          "Simpson's 1/3 rule is based on parabolic arcs.",
          "The number of subintervals must be even.",
          "Odd-indexed interior values receive coefficient 4.",
          "Even-indexed interior values receive coefficient 2."
        ],
        "caution": "For n = 2, there is only one interior point and it has coefficient 4. Do not apply a coefficient 2 to that point.",
        "programs": [
          {
            "type": "legacy",
            "group": 4,
            "index": 1
          }
        ]
      },
      {
        "title": "Simpson's 3/8 Rule",
        "overview": "Simpson's 3/8 rule uses cubic interpolation over three equal subintervals and can be applied in composite form when the subinterval count is a multiple of three.",
        "concept": [
          "Simpson’s 3/8 Rule is a numerical integration method that uses a cubic polynomial to approximate the curve over a group of three equal subintervals. It is another member of the Newton–Cotes formulas. It is useful when the number of subintervals can be divided into groups of three.",
          "The interval is divided into n equal parts, where n must be a positive multiple of three. The step size is h = (b-a)/n. The first and last function values are used once. For the interior points, values whose index is a multiple of three are multiplied by 2, while the other interior values are multiplied by 3. The weighted sum is then multiplied by 3h/8.",
          "The rule requires equally spaced points and the correct number of subintervals. It should not be confused with Simpson’s 1/3 Rule, which requires an even number of subintervals and uses different weights. The result is an approximation to the definite integral. Accuracy depends on the smoothness of the function and the chosen step size."
        ],
        "formula": [
          "h = (b − a) / n,  n = 3, 6, 9, …",
          "I ≈ (3h/8) [y₀ + yₙ + 3Σ(yᵢ, i not divisible by 3) + 2Σ(yᵢ, i divisible by 3, interior)]"
        ],
        "formulaNote": "The endpoints have coefficient 1. Interior indices divisible by 3 have coefficient 2; other interior indices have coefficient 3.",
        "example": [
          "For one panel, n = 3. The weights are 1, 3, 3, 1.",
          "The estimate is I ≈ (3h/8)(y₀ + 3y₁ + 3y₂ + y₃)."
        ],
        "steps": [
          "Choose n as a positive multiple of three.",
          "Calculate h = (b − a)/n.",
          "Evaluate the function at all equally spaced points.",
          "Give coefficient 1 to endpoints, 3 to ordinary interior points and 2 to interior indices divisible by 3.",
          "Multiply the weighted sum by 3h/8."
        ],
        "points": [
          "Simpson's 3/8 rule uses groups of three subintervals.",
          "The number of subintervals must be a multiple of three.",
          "For a single panel, the weights are 1, 3, 3, 1.",
          "The formula is exact for cubic polynomials in exact arithmetic."
        ],
        "caution": "Do not use n = 4 or n = 5 in the composite 3/8 formula by itself. The number of subintervals must be divisible by three.",
        "programs": [
          {
            "type": "legacy",
            "group": 4,
            "index": 2
          }
        ]
      },
      {
        "title": "Ordinary Differential Equations: Initial Value Problems",
        "overview": "An ordinary differential equation relates an unknown function to one or more of its derivatives. An initial value problem supplies the value of the function at a starting point.",
        "concept": [
          "An ordinary differential equation contains an unknown function and one or more of its derivatives with respect to a single independent variable. It describes how a quantity changes. For example, a differential equation may describe the change of population with time, the movement of an object or the change of temperature.",
          "An initial value problem gives the differential equation together with a starting value. A common first-order form is dy/dx = f(x,y), with a known value y(x₀) = y₀. The starting point is needed because many different solution curves may satisfy the same differential equation but have different starting values.",
          "Numerical methods calculate approximate values of y at selected x-values. The interval is divided into steps of size h, and each method uses one or more slope calculations to estimate the next value. Euler, Modified Euler and Runge–Kutta methods are included in this unit. The computed values are approximate, and the step size affects their accuracy."
        ],
        "formula": [
          "dy/dx = f(x, y)",
          "Initial condition: y(x₀) = y₀",
          "Step size: h = (xₙ − x₀) / n"
        ],
        "formulaNote": "The final x-value, initial condition and number of steps determine the step size for a uniform grid.",
        "example": [
          "For dy/dx = y with y(0) = 1, the differential equation gives the slope at each point.",
          "A numerical method uses the initial value and a selected step size to estimate y at x = 0.1, 0.2 and later points."
        ],
        "steps": [
          "Write the differential equation in the form dy/dx = f(x,y).",
          "Identify the initial values x₀ and y₀.",
          "Choose the final x-value and number of steps.",
          "Calculate h.",
          "Apply the chosen numerical method at each step and record the approximate solution."
        ],
        "points": [
          "An initial value problem includes a starting condition.",
          "The step size affects the accuracy of the numerical solution.",
          "Each method uses the slope function f(x,y).",
          "The computed values are approximations to the exact solution."
        ],
        "caution": "Do not confuse an ordinary differential equation with an algebraic equation. The derivative term describes how the unknown function changes.",
        "programs": [
          {
            "type": "legacy",
            "group": 5,
            "index": 0
          },
          {
            "type": "legacy",
            "group": 5,
            "index": 1
          },
          {
            "type": "legacy",
            "group": 5,
            "index": 2
          },
          {
            "type": "legacy",
            "group": 5,
            "index": 3
          }
        ]
      },
      {
        "title": "Euler's Method",
        "overview": "Euler's method estimates the next solution value by moving along the tangent slope at the beginning of the current step.",
        "concept": [
          "Euler’s Method is one of the simplest numerical methods for solving a first-order initial value problem. It is used when the differential equation is written as dy/dx = f(x,y) and an initial value y₀ is known at x₀. The method estimates the next value by using the slope at the beginning of the current step.",
          "The step size is h. At the current point (xₙ,yₙ), the slope is f(xₙ,yₙ). The change in y is estimated by multiplying this slope by h. The next value is yₙ₊₁ = yₙ + h f(xₙ,yₙ), and the next x-value is xₙ₊₁ = xₙ + h. These calculations are repeated until the required final x-value is reached.",
          "Euler’s Method is easy to understand and write in a computer program. However, it normally gives less accurate results than higher-order methods for the same step size. A smaller h usually improves the result, but it also increases the number of calculations. The starting values, step size and differential equation must be entered correctly."
        ],
        "formula": [
          "xₙ₊₁ = xₙ + h",
          "yₙ₊₁ = yₙ + h f(xₙ, yₙ)"
        ],
        "formulaNote": "The formula uses the slope at the beginning of the interval.",
        "example": [
          "For dy/dx = y, y(0) = 1 and h = 0.1, the starting slope is f(0,1) = 1.",
          "Euler gives y₁ = 1 + 0.1(1) = 1.1 at x₁ = 0.1."
        ],
        "steps": [
          "Identify f(x,y), x₀, y₀ and h.",
          "Calculate the slope f(xₙ,yₙ).",
          "Calculate yₙ₊₁ = yₙ + h f(xₙ,yₙ).",
          "Increase x by h.",
          "Repeat until the final x-value is reached."
        ],
        "points": [
          "Euler's method is an explicit one-step method.",
          "It uses the slope at the beginning of the step.",
          "It is simple but usually less accurate than higher-order Runge–Kutta methods.",
          "Reducing h generally improves accuracy."
        ],
        "caution": "Use the current xₙ and yₙ to calculate the slope. Do not use the next x-value before evaluating the starting slope.",
        "programs": [
          {
            "type": "legacy",
            "group": 5,
            "index": 0
          }
        ]
      },
      {
        "title": "Modified Euler's Method and Predictor–Corrector Method",
        "overview": "Modified Euler improves the basic Euler estimate by using an average of the starting slope and an estimated ending slope. It is commonly presented as a predictor–corrector process.",
        "concept": [
          "Modified Euler’s Method improves the basic Euler estimate by using two slope values instead of only the starting slope. It is often taught as a predictor–corrector method. The predictor first uses the Euler formula to estimate the next y-value. This predicted value is then used to calculate an approximate slope at the end of the step.",
          "The corrector takes the average of the slope at the beginning and the slope at the predicted endpoint. This average slope is multiplied by the step size and added to the current y-value. The corrected value can be used again in the corrector formula. Repeated correction is continued when required by the question until the difference between two corrected values is smaller than the tolerance.",
          "The predictor gives an initial estimate, while the corrector improves that estimate. This method is usually more accurate than a single ordinary Euler step. The exact version used should match the formula taught in the course. The beginning slope must use the current point, and the ending slope must use the predicted or latest corrected endpoint value."
        ],
        "formula": [
          "Predictor: yₙ₊₁⁽⁰⁾ = yₙ + h f(xₙ, yₙ)",
          "Corrector: yₙ₊₁ = yₙ + (h/2)[f(xₙ,yₙ) + f(xₙ₊₁,yₙ₊₁⁽⁰⁾)]"
        ],
        "formulaNote": "In a repeated corrector, replace the predicted endpoint value with the latest corrected value until the specified tolerance is met.",
        "example": [
          "For dy/dx = x + y, x₀ = 0, y₀ = 1 and h = 0.1, the starting slope is 1.",
          "Predictor: y₁⁽⁰⁾ = 1 + 0.1(1) = 1.1. The predicted endpoint slope is 0.1 + 1.1 = 1.2.",
          "Corrector: y₁ = 1 + (0.1/2)(1 + 1.2) = 1.11."
        ],
        "steps": [
          "Calculate the starting slope f(xₙ,yₙ).",
          "Predict the next value using Euler's formula.",
          "Calculate the slope at the predicted endpoint.",
          "Average the starting and predicted endpoint slopes.",
          "Correct the next y-value and repeat correction if required."
        ],
        "points": [
          "The predictor is an Euler estimate.",
          "The corrector uses an average of two slopes.",
          "Correction may be repeated until the difference is small.",
          "The method generally improves on a single Euler step."
        ],
        "caution": "Keep the predictor and corrector stages separate. The endpoint slope must use the predicted or latest corrected y-value, not the old yₙ.",
        "programs": [
          {
            "type": "legacy",
            "group": 5,
            "index": 1
          }
        ]
      },
      {
        "title": "Runge–Kutta Second-Order Method",
        "overview": "A second-order Runge–Kutta method combines slope information from within a step to obtain a more accurate estimate than the basic Euler method.",
        "concept": [
          "The second-order Runge–Kutta method, commonly called RK2, improves the Euler method by using two slope calculations in each step. There are different RK2 forms. The program in this syllabus uses the midpoint form, in which the second slope is calculated at the middle of the interval.",
          "First, k₁ is calculated from the slope at the current point. Half of this change is used to estimate the y-value at the midpoint, and the x-value is also moved halfway through the interval. The second slope k₂ is calculated at this midpoint. The complete k₂ value is then added to the current y-value to get the next approximation.",
          "RK2 normally gives a better approximation than Euler’s Method for the same step size on a smooth problem. It uses two function evaluations per step. It is important to use the midpoint formula consistently. Other RK2 forms, such as Heun’s method, use a different second slope and update formula."
        ],
        "formula": [
          "k₁ = h f(xₙ, yₙ)",
          "k₂ = h f(xₙ + h/2, yₙ + k₁/2)",
          "yₙ₊₁ = yₙ + k₂"
        ],
        "formulaNote": "This is the midpoint form of RK2. Heun's second-order method uses a different second-slope location and averaging formula.",
        "example": [
          "For dy/dx = y, y₀ = 1 and h = 0.1: k₁ = 0.1(1) = 0.1.",
          "k₂ = 0.1(1 + 0.1/2) = 0.105. Therefore y₁ = 1 + 0.105 = 1.105."
        ],
        "steps": [
          "Calculate k₁ using the current point.",
          "Estimate the midpoint x-value and y-value.",
          "Calculate k₂ at that midpoint.",
          "Add k₂ to the current y-value.",
          "Increase x by h and repeat."
        ],
        "points": [
          "RK2 uses two slope evaluations per step.",
          "The midpoint version evaluates its second slope halfway through the interval.",
          "It is generally more accurate than Euler for the same step size on smooth problems.",
          "Different RK2 variants use different second-slope formulas."
        ],
        "caution": "State which RK2 variant is being used. Do not combine the midpoint k₂ formula with Heun's averaging update.",
        "programs": [
          {
            "type": "legacy",
            "group": 5,
            "index": 2
          }
        ]
      },
      {
        "title": "Runge–Kutta Fourth-Order Method",
        "overview": "The classical fourth-order Runge–Kutta method evaluates four slopes in each step and combines them using a weighted average.",
        "concept": [
          "The classical fourth-order Runge–Kutta Method, known as RK4, is a widely used numerical method for solving first-order initial value problems. It estimates the next value by calculating four slopes during each step. These slopes represent the beginning of the interval, two estimates at the midpoint and an estimate at the end of the interval.",
          "The first slope k₁ is calculated at the current point. The second slope k₂ uses a midpoint estimate based on k₁. The third slope k₃ also uses the midpoint, but it is based on k₂. The fourth slope k₄ uses an endpoint estimate based on k₃. The final change in y is a weighted average of the four slopes, with weights 1, 2, 2 and 1, divided by 6.",
          "RK4 is usually more accurate than Euler and RK2 for smooth problems when the same step size is used. It does not require the second, third or fourth derivatives of the solution. Each step requires four evaluations of the differential equation. The method is still numerical, so the step size and the behaviour of the problem affect the final accuracy."
        ],
        "formula": [
          "k₁ = h f(xₙ, yₙ)",
          "k₂ = h f(xₙ + h/2, yₙ + k₁/2)",
          "k₃ = h f(xₙ + h/2, yₙ + k₂/2)",
          "k₄ = h f(xₙ + h, yₙ + k₃)",
          "yₙ₊₁ = yₙ + (k₁ + 2k₂ + 2k₃ + k₄)/6"
        ],
        "formulaNote": "The k-values include the step size h in this convention. Some textbooks define the slopes without h and multiply by h in the final formula.",
        "example": [
          "For dy/dx = y with y₀ = 1 and h = 0.1: k₁ = 0.1, k₂ = 0.105, k₃ = 0.10525 and k₄ = 0.110525.",
          "The weighted update gives y₁ ≈ 1.105171, close to the exact value e⁰·¹ ≈ 1.105171."
        ],
        "steps": [
          "Calculate k₁ at the beginning of the step.",
          "Calculate k₂ at the midpoint using k₁.",
          "Calculate k₃ at the midpoint using k₂.",
          "Calculate k₄ at the endpoint using k₃.",
          "Combine the four slopes with weights 1, 2, 2 and 1.",
          "Update x and repeat for the next step."
        ],
        "points": [
          "RK4 uses four slope evaluations per step.",
          "The midpoint slopes have double weight.",
          "The final denominator is 6.",
          "The classical method has fourth-order global accuracy for sufficiently smooth problems."
        ],
        "caution": "Do not omit the factor of 2 on k₂ and k₃. Check whether your textbook includes h inside each k-value or outside the final weighted sum.",
        "programs": [
          {
            "type": "legacy",
            "group": 5,
            "index": 3
          }
        ]
      }
    ]
  }
];

var extraPrograms = [
  {
    "category": "Numerical and Error Analysis",
    "title": "Calculate Absolute, Relative and Percentage Error",
    "q": "Write a C program to read a true value and an approximate value, then calculate absolute error, relative error and percentage error.",
    "answer": "#include <stdio.h>\n\nint main()\n{\n    double trueValue, approximateValue;\n    double absoluteError, relativeError, percentageError;\n    double referenceValue;\n\n    printf(\"Enter true value: \");\n    scanf(\"%lf\", &trueValue);\n\n    printf(\"Enter approximate value: \");\n    scanf(\"%lf\", &approximateValue);\n\n    absoluteError = trueValue - approximateValue;\n    if (absoluteError < 0)\n    {\n        absoluteError = -absoluteError;\n    }\n\n    if (trueValue == 0)\n    {\n        printf(\"Relative error is undefined when true value is zero.\\n\");\n        printf(\"Absolute error = %.6f\\n\", absoluteError);\n        return 0;\n    }\n\n    referenceValue = trueValue;\n    if (referenceValue < 0)\n    {\n        referenceValue = -referenceValue;\n    }\n\n    relativeError = absoluteError / referenceValue;\n    percentageError = relativeError * 100;\n\n    printf(\"Absolute error = %.6f\\n\", absoluteError);\n    printf(\"Relative error = %.6f\\n\", relativeError);\n    printf(\"Percentage error = %.4f%%\\n\", percentageError);\n\n    return 0;\n}",
    "output": "Enter true value: 10\nEnter approximate value: 9.8\nAbsolute error = 0.200000\nRelative error = 0.020000\nPercentage error = 2.0000%"
  },
  {
    "category": "Numerical and Error Analysis",
    "title": "Compare Chopping and Rounding",
    "q": "Write a C program to display the chopping and rounding of a number to a given number of decimal places.",
    "answer": "#include <stdio.h>\n\nint main()\n{\n    double number, factor = 1, scaled;\n    double chopped, rounded;\n    long long choppedInteger, roundedInteger;\n    int places, i;\n\n    printf(\"Enter a number: \");\n    scanf(\"%lf\", &number);\n\n    printf(\"Enter decimal places (0 to 8): \");\n    scanf(\"%d\", &places);\n\n    if (places < 0 || places > 8)\n    {\n        printf(\"Enter decimal places from 0 to 8.\\n\");\n        return 0;\n    }\n\n    for (i = 1; i <= places; i++)\n    {\n        factor = factor * 10;\n    }\n\n    scaled = number * factor;\n    choppedInteger = (long long)scaled;\n\n    if (scaled >= 0)\n    {\n        roundedInteger = (long long)(scaled + 0.5);\n    }\n    else\n    {\n        roundedInteger = (long long)(scaled - 0.5);\n    }\n\n    chopped = choppedInteger / factor;\n    rounded = roundedInteger / factor;\n\n    printf(\"Chopped value = %.*f\\n\", places, chopped);\n    printf(\"Rounded value = %.*f\\n\", places, rounded);\n\n    return 0;\n}",
    "output": "Enter a number: 3.14159\nEnter decimal places (0 to 8): 3\nChopped value = 3.141\nRounded value = 3.142"
  },
  {
    "category": "Numerical and Error Analysis",
    "title": "Estimate Error in Addition and Multiplication",
    "q": "Write a C program to estimate maximum absolute error for addition and approximate relative error for multiplication using the absolute uncertainties of two input values.",
    "answer": "#include <stdio.h>\n\nint main()\n{\n    double x, y, dx, dy;\n    double sumError, product;\n    double relativeError;\n    double absX, absY;\n\n    printf(\"Enter x and y: \");\n    scanf(\"%lf %lf\", &x, &y);\n\n    printf(\"Enter absolute errors in x and y: \");\n    scanf(\"%lf %lf\", &dx, &dy);\n\n    sumError = dx + dy;\n    product = x * y;\n\n    printf(\"Maximum absolute error in sum = %.6f\\n\", sumError);\n    printf(\"Product = %.6f\\n\", product);\n\n    absX = x;\n    absY = y;\n    if (absX < 0) absX = -absX;\n    if (absY < 0) absY = -absY;\n\n    if (absX == 0 || absY == 0)\n    {\n        printf(\"Relative product error estimate is undefined for a zero input.\\n\");\n    }\n    else\n    {\n        relativeError = dx / absX + dy / absY;\n        printf(\"Approximate relative error in product = %.6f\\n\", relativeError);\n        printf(\"Approximate percentage error in product = %.4f%%\\n\", relativeError * 100);\n    }\n\n    return 0;\n}",
    "output": "Enter x and y: 10 5\nEnter absolute errors in x and y: 0.1 0.05\nMaximum absolute error in sum = 0.150000\nProduct = 50.000000\nApproximate relative error in product = 0.020000\nApproximate percentage error in product = 2.0000%"
  }
];

var programTopics = [
  {
    "name": "ROOT FINDING METHODS",
    "questions": [
      {
        "q": "Bisection Method — Write a C program to find a real root of f(x) = x³ − x − 4 using the Bisection Method. Start with an interval [a, b] for which f(a) and f(b) have opposite signs, and stop when the interval half-width is within the tolerance.",
        "answer": "#include <stdio.h>\n\ndouble f(double x)\n{\n    return x * x * x - x - 4;\n}\n\nint main()\n{\n    double a, b, c, eps;\n    int iterations = 0;\n\n    printf(\"Enter a, b and tolerance: \");\n    scanf(\"%lf %lf %lf\", &a, &b, &eps);\n\n    if (eps <= 0 || f(a) * f(b) >= 0)\n    {\n        printf(\"Invalid interval or tolerance.\\n\");\n        return 0;\n    }\n\n    while ((b - a) / 2 > eps)\n    {\n        c = (a + b) / 2;\n\n        if (f(a) * f(c) < 0)\n        {\n            b = c;\n        }\n        else\n        {\n            a = c;\n        }\n\n        iterations++;\n    }\n\n    c = (a + b) / 2;\n    printf(\"Approximate root = %.6f\\n\", c);\n    printf(\"Iterations = %d\\n\", iterations);\n\n    return 0;\n}",
        "output": "Enter a, b and tolerance: 1 2 0.0001\nApproximate root = 1.796326\nIterations = 13"
      },
      {
        "q": "False Position (Regula Falsi) Method — Write a C program to solve f(x) = x³ − x − 4 by the False Position Method. Read the lower endpoint, upper endpoint and tolerance; reject an interval whose endpoints do not bracket a root.",
        "answer": "#include <stdio.h>\n\ndouble f(double x)\n{\n    return x * x * x - x - 4;\n}\n\nint main()\n{\n    double a, b, c, fa, fb, fc, eps, error;\n    int iterations = 0;\n\n    printf(\"Enter a, b and tolerance: \");\n    scanf(\"%lf %lf %lf\", &a, &b, &eps);\n\n    fa = f(a);\n    fb = f(b);\n\n    if (eps <= 0 || fa * fb >= 0)\n    {\n        printf(\"Invalid interval or tolerance.\\n\");\n        return 0;\n    }\n\n    do\n    {\n        c = (a * fb - b * fa) / (fb - fa);\n        fc = f(c);\n\n        if (fa * fc < 0)\n        {\n            b = c;\n            fb = fc;\n        }\n        else\n        {\n            a = c;\n            fa = fc;\n        }\n\n        error = fc;\n        if (error < 0) error = -error;\n        iterations++;\n\n    } while (error > eps);\n\n    printf(\"Approximate root = %.6f\\n\", c);\n    printf(\"Iterations = %d\\n\", iterations);\n\n    return 0;\n}",
        "output": "Enter a, b and tolerance: 1 2 0.0001\nApproximate root = 1.796319\nIterations = 6"
      },
      {
        "q": "Newton–Raphson Method — Write a C program to find a root of f(x) = x³ − x − 4 using the Newton–Raphson Method. Use f′(x) = 3x² − 1, an initial estimate x₀, and a stopping tolerance.",
        "answer": "#include <stdio.h>\n\ndouble f(double x)\n{\n    return x * x * x - x - 4;\n}\n\ndouble df(double x)\n{\n    return 3 * x * x - 1;\n}\n\nint main()\n{\n    double x, next, eps, difference, slope;\n    int iterations = 0;\n\n    printf(\"Enter initial guess and tolerance: \");\n    scanf(\"%lf %lf\", &x, &eps);\n\n    if (eps <= 0)\n    {\n        printf(\"Tolerance must be positive.\\n\");\n        return 0;\n    }\n\n    do\n    {\n        slope = df(x);\n        if (slope == 0)\n        {\n            printf(\"Derivative is zero. Choose another initial guess.\\n\");\n            return 0;\n        }\n\n        next = x - f(x) / slope;\n        difference = next - x;\n        if (difference < 0) difference = -difference;\n\n        x = next;\n        iterations++;\n\n    } while (difference > eps);\n\n    printf(\"Approximate root = %.6f\\n\", x);\n    printf(\"Iterations = %d\\n\", iterations);\n\n    return 0;\n}",
        "output": "Enter initial guess and tolerance: 2 0.0001\nApproximate root = 1.796322\nIterations = 4"
      },
      {
        "q": "Birge–Vieta Method — Write a C program to estimate a root of a polynomial using the Birge–Vieta Method. Enter the degree, coefficients from highest power to constant term, the initial estimate, tolerance and maximum iterations. The sample polynomial is x³ − 6x² + 11x − 6.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, iter, maxIter;\n    double x, next, eps, error;\n\n    printf(\"Enter polynomial degree: \");\n    scanf(\"%d\", &n);\n\n    if (n < 1)\n    {\n        printf(\"Degree must be positive.\\n\");\n        return 0;\n    }\n\n    double a[n + 1], b[n + 1], c[n];\n\n    printf(\"Enter %d coefficients, highest power first: \", n + 1);\n    for (i = 0; i <= n; i++)\n    {\n        scanf(\"%lf\", &a[i]);\n    }\n\n    printf(\"Enter initial guess: \");\n    scanf(\"%lf\", &x);\n    printf(\"Enter tolerance: \");\n    scanf(\"%lf\", &eps);\n    printf(\"Enter maximum iterations: \");\n    scanf(\"%d\", &maxIter);\n\n    if (eps <= 0 || maxIter <= 0 || a[0] == 0)\n    {\n        printf(\"Invalid input.\\n\");\n        return 0;\n    }\n\n    for (iter = 1; iter <= maxIter; iter++)\n    {\n        b[0] = a[0];\n        for (i = 1; i <= n; i++)\n        {\n            b[i] = a[i] + x * b[i - 1];\n        }\n\n        c[0] = b[0];\n        for (i = 1; i < n; i++)\n        {\n            c[i] = b[i] + x * c[i - 1];\n        }\n\n        if (c[n - 1] == 0)\n        {\n            printf(\"Cannot continue because the correction denominator is zero.\\n\");\n            return 0;\n        }\n\n        next = x - b[n] / c[n - 1];\n        error = next - x;\n        if (error < 0) error = -error;\n        x = next;\n\n        if (error < eps)\n        {\n            break;\n        }\n    }\n\n    if (iter > maxIter) iter = maxIter;\n\n    printf(\"Approximate root = %.6f\\n\", x);\n    printf(\"Iterations = %d\\n\", iter);\n\n    return 0;\n}",
        "output": "Enter polynomial degree: 3\nEnter 4 coefficients, highest power first: 1 -6 11 -6\nEnter initial guess: 4\nEnter tolerance: 0.0001\nEnter maximum iterations: 100\nApproximate root = 3.000000\nIterations = 6"
      }
    ]
  },
  {
    "name": "SYSTEMS OF LINEAR EQUATIONS",
    "questions": [
      {
        "q": "Gauss Elimination Method — Write a C program to solve a system of linear equations using Gauss Elimination. Enter n and the n × (n+1) augmented matrix. The sample system has solution x₁ = 2, x₂ = 3, x₃ = −1.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j, k;\n    double factor;\n\n    printf(\"Enter number of equations: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0)\n    {\n        printf(\"Number of equations must be positive.\\n\");\n        return 0;\n    }\n\n    double a[n][n + 1], x[n];\n\n    printf(\"Enter each row of the augmented matrix (n coefficients and RHS):\\n\");\n    for (i = 0; i < n; i++)\n    {\n        for (j = 0; j <= n; j++)\n        {\n            scanf(\"%lf\", &a[i][j]);\n        }\n    }\n\n    for (k = 0; k < n - 1; k++)\n    {\n        if (a[k][k] == 0)\n        {\n            printf(\"A zero pivot was found. Row interchange is needed.\\n\");\n            return 0;\n        }\n\n        for (i = k + 1; i < n; i++)\n        {\n            factor = a[i][k] / a[k][k];\n            for (j = k; j <= n; j++)\n            {\n                a[i][j] = a[i][j] - factor * a[k][j];\n            }\n        }\n    }\n\n    if (a[n - 1][n - 1] == 0)\n    {\n        printf(\"A zero pivot was found. Row interchange is needed.\\n\");\n        return 0;\n    }\n\n    for (i = n - 1; i >= 0; i--)\n    {\n        x[i] = a[i][n];\n        for (j = i + 1; j < n; j++)\n        {\n            x[i] = x[i] - a[i][j] * x[j];\n        }\n        x[i] = x[i] / a[i][i];\n    }\n\n    printf(\"Solution:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        printf(\"x%d = %.6f\\n\", i + 1, x[i]);\n    }\n\n    return 0;\n}",
        "output": "Enter number of equations: 3\nEnter each row of the augmented matrix (n coefficients and RHS):\n2 1 -1 8\n-3 -1 2 -11\n-2 1 2 -3\nSolution:\nx1 = 2.000000\nx2 = 3.000000\nx3 = -1.000000"
      },
      {
        "q": "Gauss–Jordan Method — Write a C program to solve simultaneous linear equations using the Gauss–Jordan Method. Normalize each pivot row and eliminate the pivot column from every other row.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j, k;\n    double pivot, factor;\n\n    printf(\"Enter number of equations: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0)\n    {\n        printf(\"Number of equations must be positive.\\n\");\n        return 0;\n    }\n\n    double a[n][n + 1];\n\n    printf(\"Enter each row of the augmented matrix (n coefficients and RHS):\\n\");\n    for (i = 0; i < n; i++)\n    {\n        for (j = 0; j <= n; j++)\n        {\n            scanf(\"%lf\", &a[i][j]);\n        }\n    }\n\n    for (k = 0; k < n; k++)\n    {\n        pivot = a[k][k];\n        if (pivot == 0)\n        {\n            printf(\"A zero pivot was found. Row interchange is needed.\\n\");\n            return 0;\n        }\n\n        for (j = 0; j <= n; j++)\n        {\n            a[k][j] = a[k][j] / pivot;\n        }\n\n        for (i = 0; i < n; i++)\n        {\n            if (i != k)\n            {\n                factor = a[i][k];\n                for (j = 0; j <= n; j++)\n                {\n                    a[i][j] = a[i][j] - factor * a[k][j];\n                }\n            }\n        }\n    }\n\n    printf(\"Solution:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        printf(\"x%d = %.6f\\n\", i + 1, a[i][n]);\n    }\n\n    return 0;\n}",
        "output": "Enter number of equations: 3\nEnter each row of the augmented matrix (n coefficients and RHS):\n2 1 -1 8\n-3 -1 2 -11\n-2 1 2 -3\nSolution:\nx1 = 2.000000\nx2 = 3.000000\nx3 = -1.000000"
      },
      {
        "q": "Gauss–Seidel Iteration Method — Write a C program to solve a diagonally dominant linear system using the Gauss–Seidel Method. Stop when the largest change in any variable is smaller than the selected tolerance or when the iteration limit is reached.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j, iteration, maxIteration;\n    double tolerance, oldValue, sum, change, maxChange;\n\n    printf(\"Enter number of equations: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0)\n    {\n        printf(\"Number of equations must be positive.\\n\");\n        return 0;\n    }\n\n    double a[n][n], b[n], x[n];\n\n    printf(\"Enter the coefficient matrix:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        for (j = 0; j < n; j++)\n        {\n            scanf(\"%lf\", &a[i][j]);\n        }\n    }\n\n    printf(\"Enter the RHS values:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf\", &b[i]);\n        x[i] = 0;\n    }\n\n    printf(\"Enter maximum iterations and tolerance: \");\n    scanf(\"%d %lf\", &maxIteration, &tolerance);\n\n    if (maxIteration <= 0 || tolerance <= 0)\n    {\n        printf(\"Iterations and tolerance must be positive.\\n\");\n        return 0;\n    }\n\n    for (iteration = 1; iteration <= maxIteration; iteration++)\n    {\n        maxChange = 0;\n\n        for (i = 0; i < n; i++)\n        {\n            oldValue = x[i];\n            sum = b[i];\n\n            for (j = 0; j < n; j++)\n            {\n                if (j != i)\n                {\n                    sum = sum - a[i][j] * x[j];\n                }\n            }\n\n            if (a[i][i] == 0)\n            {\n                printf(\"Diagonal element cannot be zero.\\n\");\n                return 0;\n            }\n\n            x[i] = sum / a[i][i];\n            change = x[i] - oldValue;\n            if (change < 0) change = -change;\n            if (change > maxChange) maxChange = change;\n        }\n\n        if (maxChange < tolerance)\n        {\n            break;\n        }\n    }\n\n    if (iteration > maxIteration) iteration = maxIteration;\n\n    printf(\"Approximate solution after %d iteration(s):\\n\", iteration);\n    for (i = 0; i < n; i++)\n    {\n        printf(\"x%d = %.6f\\n\", i + 1, x[i]);\n    }\n\n    return 0;\n}",
        "output": "Enter number of equations: 3\nEnter the coefficient matrix:\n10 -1 2\n-1 11 -1\n2 -1 10\nEnter the RHS values:\n6 22 -10\nEnter maximum iterations and tolerance: 100 0.000001\nApproximate solution after 7 iteration(s):\nx1 = 1.000000\nx2 = 2.000000\nx3 = -1.000000"
      }
    ]
  },
  {
    "name": "FINITE DIFFERENCE TABLES",
    "questions": [
      {
        "q": "Newton Forward Difference Table — Write a C program to generate a Newton Forward Difference Table from equally spaced (x, y) data. The sample data are (0,1), (1,2), (2,5), and (3,10).",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j;\n\n    printf(\"Enter number of data points: \");\n    scanf(\"%d\", &n);\n\n    if (n < 2)\n    {\n        printf(\"At least two data points are required.\\n\");\n        return 0;\n    }\n\n    double x[n], d[n][n];\n\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf %lf\", &x[i], &d[i][0]);\n    }\n\n    for (j = 1; j < n; j++)\n    {\n        for (i = 0; i < n - j; i++)\n        {\n            d[i][j] = d[i + 1][j - 1] - d[i][j - 1];\n        }\n    }\n\n    printf(\"\\nForward Difference Table\\n\");\n    printf(\"%8s\", \"x\");\n    printf(\"%12s\", \"y\");\n    for (j = 1; j < n; j++) printf(\"    D%d\", j);\n    printf(\"\\n\");\n\n    for (i = 0; i < n; i++)\n    {\n        printf(\"%8.2f\", x[i]);\n        for (j = 0; j < n - i; j++)\n        {\n            printf(\"%12.2f\", d[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}",
        "output": "Enter number of data points: 4\nEnter each x and y pair:\n0 1\n1 2\n2 5\n3 10\n\nForward Difference Table\n       x           y    D1    D2    D3\n    0.00        1.00        1.00        2.00        0.00\n    1.00        2.00        3.00        2.00\n    2.00        5.00        5.00\n    3.00       10.00"
      },
      {
        "q": "Newton Backward Difference Table — Write a C program to generate a Newton Backward Difference Table for equally spaced (x, y) data. Use the sample points (0,1), (1,2), (2,5), and (3,10).",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j;\n\n    printf(\"Enter number of data points: \");\n    scanf(\"%d\", &n);\n\n    if (n < 2)\n    {\n        printf(\"At least two data points are required.\\n\");\n        return 0;\n    }\n\n    double x[n], d[n][n];\n\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf %lf\", &x[i], &d[i][0]);\n    }\n\n    for (j = 1; j < n; j++)\n    {\n        for (i = j; i < n; i++)\n        {\n            d[i][j] = d[i][j - 1] - d[i - 1][j - 1];\n        }\n    }\n\n    printf(\"\\nBackward Difference Table\\n\");\n    printf(\"%8s\", \"x\");\n    printf(\"%12s\", \"y\");\n    for (j = 1; j < n; j++) printf(\"    d%d\", j);\n    printf(\"\\n\");\n\n    for (i = 0; i < n; i++)\n    {\n        printf(\"%8.2f\", x[i]);\n        for (j = 0; j <= i; j++)\n        {\n            printf(\"%12.2f\", d[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}",
        "output": "Enter number of data points: 4\nEnter each x and y pair:\n0 1\n1 2\n2 5\n3 10\n\nBackward Difference Table\n       x           y    d1    d2    d3\n    0.00        1.00\n    1.00        2.00        1.00\n    2.00        5.00        3.00        2.00\n    3.00       10.00        5.00        2.00        0.00"
      },
      {
        "q": "Newton Divided Difference Table — Write a C program to construct a Newton Divided Difference Table from the points (1,1), (2,4), and (3,9).",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j;\n\n    printf(\"Enter number of data points: \");\n    scanf(\"%d\", &n);\n\n    if (n < 2)\n    {\n        printf(\"At least two data points are required.\\n\");\n        return 0;\n    }\n\n    double x[n], d[n][n];\n\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf %lf\", &x[i], &d[i][0]);\n    }\n\n    for (j = 1; j < n; j++)\n    {\n        for (i = 0; i < n - j; i++)\n        {\n            d[i][j] = (d[i + 1][j - 1] - d[i][j - 1]) / (x[i + j] - x[i]);\n        }\n    }\n\n    printf(\"\\nDivided Difference Table\\n\");\n    printf(\"%8s\", \"x\");\n    printf(\"%12s\", \"f[x]\");\n    for (j = 1; j < n; j++) printf(\"    DD%d\", j);\n    printf(\"\\n\");\n\n    for (i = 0; i < n; i++)\n    {\n        printf(\"%8.2f\", x[i]);\n        for (j = 0; j < n - i; j++)\n        {\n            printf(\"%12.4f\", d[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}",
        "output": "Enter number of data points: 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\n\nDivided Difference Table\n       x        f[x]    DD1    DD2\n    1.00      1.0000      3.0000      1.0000\n    2.00      4.0000      5.0000\n    3.00      9.0000"
      }
    ]
  },
  {
    "name": "INTERPOLATION",
    "questions": [
      {
        "q": "Newton Divided Difference Interpolation — Write a C program to evaluate the Newton Divided Difference Interpolation Polynomial for the points (1,1), (2,4), (3,9). Find y when x = 2.5.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j;\n    double value, result, product;\n\n    printf(\"Enter number of data points: \");\n    scanf(\"%d\", &n);\n\n    if (n < 2)\n    {\n        printf(\"At least two data points are required.\\n\");\n        return 0;\n    }\n\n    double x[n], d[n][n];\n\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf %lf\", &x[i], &d[i][0]);\n    }\n\n    for (j = 1; j < n; j++)\n    {\n        for (i = 0; i < n - j; i++)\n        {\n            d[i][j] = (d[i + 1][j - 1] - d[i][j - 1]) / (x[i + j] - x[i]);\n        }\n    }\n\n    printf(\"Enter x at which y is required: \");\n    scanf(\"%lf\", &value);\n\n    result = d[0][0];\n    product = 1;\n\n    for (j = 1; j < n; j++)\n    {\n        product = product * (value - x[j - 1]);\n        result = result + d[0][j] * product;\n    }\n\n    printf(\"Interpolated value y = %.6f\\n\", result);\n\n    return 0;\n}",
        "output": "Enter number of data points: 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\nEnter x at which y is required: 2.5\nInterpolated value y = 6.250000"
      },
      {
        "q": "Lagrange Interpolation Polynomial — Write a C program to find an interpolated value using the Lagrange Interpolation Polynomial. Use the data points (1,1), (2,4), (3,9) and find y at x = 2.5.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    int n, i, j;\n    double value, result, term;\n\n    printf(\"Enter number of data points: \");\n    scanf(\"%d\", &n);\n\n    if (n < 2)\n    {\n        printf(\"At least two data points are required.\\n\");\n        return 0;\n    }\n\n    double x[n], y[n];\n\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++)\n    {\n        scanf(\"%lf %lf\", &x[i], &y[i]);\n    }\n\n    printf(\"Enter x at which y is required: \");\n    scanf(\"%lf\", &value);\n\n    result = 0;\n\n    for (i = 0; i < n; i++)\n    {\n        term = y[i];\n\n        for (j = 0; j < n; j++)\n        {\n            if (i != j)\n            {\n                term = term * (value - x[j]) / (x[i] - x[j]);\n            }\n        }\n\n        result = result + term;\n    }\n\n    printf(\"Interpolated value y = %.6f\\n\", result);\n\n    return 0;\n}",
        "output": "Enter number of data points: 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\nEnter x at which y is required: 2.5\nInterpolated value y = 6.250000"
      }
    ]
  },
  {
    "name": "NUMERICAL INTEGRATION",
    "questions": [
      {
        "q": "Trapezoidal Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using the composite Trapezoidal Rule. Enter the integration limits and number of subintervals.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double a, b, h, x, y, sum, integral;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n\n    printf(\"Enter number of subintervals: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || b <= a)\n    {\n        printf(\"Invalid limits or number of subintervals.\\n\");\n        return 0;\n    }\n\n    h = (b - a) / n;\n    sum = 0;\n\n    for (i = 1; i < n; i++)\n    {\n        x = a + i * h;\n        y = 1 / (1 + x * x * x * x);\n        sum = sum + y;\n    }\n\n    x = a;\n    y = 1 / (1 + x * x * x * x);\n    sum = sum + y / 2;\n\n    x = b;\n    y = 1 / (1 + x * x * x * x);\n    sum = sum + y / 2;\n\n    integral = h * sum;\n    printf(\"Approximate integral = %.6f\\n\", integral);\n\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter number of subintervals: 4\nApproximate integral = 0.861732"
      },
      {
        "q": "Simpson’s 1/3 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using Simpson’s 1/3 Rule. The number of subintervals n must be positive and even.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double a, b, h, x, y, sum, integral;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n\n    printf(\"Enter an even number of subintervals: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || n % 2 != 0 || b <= a)\n    {\n        printf(\"Simpson's 1/3 Rule needs a positive even n and b > a.\\n\");\n        return 0;\n    }\n\n    h = (b - a) / n;\n    y = 1 / (1 + a * a * a * a);\n    sum = y;\n\n    y = 1 / (1 + b * b * b * b);\n    sum = sum + y;\n\n    for (i = 1; i < n; i++)\n    {\n        x = a + i * h;\n        y = 1 / (1 + x * x * x * x);\n\n        if (i % 2 == 0)\n        {\n            sum = sum + 2 * y;\n        }\n        else\n        {\n            sum = sum + 4 * y;\n        }\n    }\n\n    integral = h * sum / 3;\n    printf(\"Approximate integral = %.6f\\n\", integral);\n\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter an even number of subintervals: 4\nApproximate integral = 0.867114"
      },
      {
        "q": "Simpson’s 3/8 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x²) from a to b using Simpson’s 3/8 Rule. The number of subintervals must be a positive multiple of three.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double a, b, h, x, y, sum, integral;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n\n    printf(\"Enter number of subintervals (multiple of 3): \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || n % 3 != 0 || b <= a)\n    {\n        printf(\"Simpson's 3/8 Rule needs b > a and n divisible by 3.\\n\");\n        return 0;\n    }\n\n    h = (b - a) / n;\n    y = 1 / (1 + a * a);\n    sum = y;\n\n    y = 1 / (1 + b * b);\n    sum = sum + y;\n\n    for (i = 1; i < n; i++)\n    {\n        x = a + i * h;\n        y = 1 / (1 + x * x);\n\n        if (i % 3 == 0)\n        {\n            sum = sum + 2 * y;\n        }\n        else\n        {\n            sum = sum + 3 * y;\n        }\n    }\n\n    integral = 3 * h * sum / 8;\n    printf(\"Approximate integral = %.6f\\n\", integral);\n\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter number of subintervals (multiple of 3): 3\nApproximate integral = 0.784615"
      }
    ]
  },
  {
    "name": "NUMERICAL SOLUTION OF ODES",
    "questions": [
      {
        "q": "Euler’s Method — Write a C program for Euler’s Method using the differential equation dy/dx = x·y. Read the initial condition (x₀, y₀), final x-value and number of steps, and print the calculated values at each step.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double x, y, finalX, h, slope;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &finalX);\n\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || finalX == x)\n    {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 0;\n    }\n\n    h = (finalX - x) / n;\n\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n\n    for (i = 0; i < n; i++)\n    {\n        slope = x * y;\n        y = y + h * slope;\n        x = x + h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n\n    printf(\"Approximate y(%.4f) = %.6f\\n\", finalX, y);\n\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0.1 1\nEnter final x value: 0.5\nEnter number of steps: 4\n\n       x          y\n  0.1000   1.000000\n  0.2000   1.010000\n  0.3000   1.030200\n  0.4000   1.061106\n  0.5000   1.103550\nApproximate y(0.5000) = 1.103550"
      },
      {
        "q": "Modified Euler’s Method — Write a C program for the Modified Euler Method using dy/dx = x² + y. Use a predictor step and repeatedly correct the next y-value with the average of the beginning and ending slopes until the correction tolerance is met.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double x, y, finalX, h, slope1, guess, corrected, error, eps;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &finalX);\n\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n\n    printf(\"Enter correction tolerance: \");\n    scanf(\"%lf\", &eps);\n\n    if (n <= 0 || finalX == x || eps <= 0)\n    {\n        printf(\"Invalid input.\\n\");\n        return 0;\n    }\n\n    h = (finalX - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n\n    for (i = 0; i < n; i++)\n    {\n        slope1 = x * x + y;\n        guess = y + h * slope1;\n\n        do\n        {\n            corrected = y + h * (slope1 + ((x + h) * (x + h) + guess)) / 2;\n            error = corrected - guess;\n            if (error < 0) error = -error;\n            guess = corrected;\n        } while (error > eps);\n\n        y = guess;\n        x = x + h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n\n    printf(\"Approximate y(%.4f) = %.6f\\n\", finalX, y);\n\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0 1\nEnter final x value: 0.2\nEnter number of steps: 2\nEnter correction tolerance: 0.00001\n\n       x          y\n  0.0000   1.000000\n  0.1000   1.105789\n  0.2000   1.224820\nApproximate y(0.2000) = 1.224820"
      },
      {
        "q": "Runge–Kutta Second-Order Method — Write a C program for the second-order Runge–Kutta midpoint method for dy/dx = x·y. Read the initial condition, final x-value and step count, and print the approximate solution at every step.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double x, y, finalX, h, k1, k2;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &finalX);\n\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || finalX == x)\n    {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 0;\n    }\n\n    h = (finalX - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n\n    for (i = 0; i < n; i++)\n    {\n        k1 = h * x * y;\n        k2 = h * (x + h / 2) * (y + k1 / 2);\n        y = y + k2;\n        x = x + h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n\n    printf(\"Approximate y(%.4f) = %.6f\\n\", finalX, y);\n\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0.1 1\nEnter final x value: 0.5\nEnter number of steps: 4\n\n       x          y\n  0.1000   1.000000\n  0.2000   1.015075\n  0.3000   1.040706\n  0.4000   1.077677\n  0.5000   1.127142\nApproximate y(0.5000) = 1.127142"
      },
      {
        "q": "Runge–Kutta Fourth-Order Method — Write a C program for the fourth-order Runge–Kutta Method. The source’s example function is dy/dx = (y² − x²) / (y² + x²). Read the initial condition, final x-value and step count, then print the table and final approximation.",
        "answer": "#include <stdio.h>\n\nint main()\n{\n    double x, y, finalX, h;\n    double k1, k2, k3, k4;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &finalX);\n\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n\n    if (n <= 0 || finalX == x)\n    {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 0;\n    }\n\n    h = (finalX - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n\n    for (i = 0; i < n; i++)\n    {\n        k1 = h * (y * y - x * x) / (y * y + x * x);\n        k2 = h * ((y + k1 / 2) * (y + k1 / 2) - (x + h / 2) * (x + h / 2)) /\n             ((y + k1 / 2) * (y + k1 / 2) + (x + h / 2) * (x + h / 2));\n        k3 = h * ((y + k2 / 2) * (y + k2 / 2) - (x + h / 2) * (x + h / 2)) /\n             ((y + k2 / 2) * (y + k2 / 2) + (x + h / 2) * (x + h / 2));\n        k4 = h * ((y + k3) * (y + k3) - (x + h) * (x + h)) /\n             ((y + k3) * (y + k3) + (x + h) * (x + h));\n\n        y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;\n        x = x + h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n\n    printf(\"Approximate y(%.4f) = %.6f\\n\", finalX, y);\n\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0 1\nEnter final x value: 0.4\nEnter number of steps: 4\n\n       x          y\n  0.0000   1.000000\n  0.1000   1.099425\n  0.2000   1.196007\n  0.3000   1.288199\n  0.4000   1.375278\nApproximate y(0.4000) = 1.375278"
      }
    ]
  }
];

var currentUnitIndex = 0;

function get(id) {
  return document.getElementById(id);
}

function escapeHTML(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

function showView(id) {
  var views = document.querySelectorAll(".view");
  for (var i = 0; i < views.length; i++) views[i].classList.add("hidden");
  get(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}

function setNavigation(id) {
  get("home-nav").classList.remove("active");
  get("programs-nav").classList.remove("active");
  get(id).classList.add("active");
}

function topicCount() {
  var count = 0;
  for (var i = 0; i < unitData.length; i++) count += unitData[i].topics.length;
  return count;
}

function programCount() {
  var count = extraPrograms.length;
  for (var i = 0; i < programTopics.length; i++) count += programTopics[i].questions.length;
  return count;
}


function renderHome() {
  get("unit-count").textContent = unitData.length;
  get("topic-count").textContent = topicCount();
  get("program-count").textContent = programCount();
  var grid = get("unit-grid");
  grid.innerHTML = "";

  for (var i = 0; i < unitData.length; i++) {
    var unit = unitData[i];
    var card = document.createElement("button");
    card.type = "button";
    card.className = "unit-card";
    card.innerHTML = "<div class='unit-card-top'><span class='unit-number'>UNIT " + (i + 1) + "</span><span class='unit-topic-count'>" + unit.topics.length + " topics</span></div><h3>" + escapeHTML(unit.title) + "</h3><p>" + escapeHTML(unit.description) + "</p><div class='unit-card-bottom'><span>Open unit</span><span>→</span></div>";
    card.addEventListener("click", makeUnitAction(i));
    grid.appendChild(card);
  }
}

function makeUnitAction(index) {
  return function () { openUnit(index); };
}

function openUnit(index) {
  currentUnitIndex = index;
  var unit = unitData[index];
  get("unit-eyebrow").textContent = "UNIT " + (index + 1);
  get("unit-title").textContent = unit.title;
  get("unit-description").textContent = unit.description;
  get("unit-topic-total").textContent = unit.topics.length + " syllabus topics";
  var list = get("unit-topic-list");
  list.innerHTML = "";

  for (var i = 0; i < unit.topics.length; i++) {
    var item = document.createElement("button");
    item.type = "button";
    item.className = "topic-list-item";
    item.innerHTML = "<span class='topic-list-number'>" + (i + 1) + "</span><span class='topic-list-text'><strong>" + escapeHTML(unit.topics[i].title) + "</strong><small>" + escapeHTML(unit.topics[i].overview) + "</small></span><span class='topic-list-arrow'>→</span>";
    item.addEventListener("click", makeTopicAction(index, i));
    list.appendChild(item);
  }
  showView("unit-view");
  setNavigation("home-nav");
}

function makeTopicAction(unitIndex, topicIndex) {
  return function () { openTopic(unitIndex, topicIndex); };
}

function makeParagraphs(items, className) {
  var html = "";
  for (var i = 0; i < items.length; i++) html += "<p>" + escapeHTML(items[i]) + "</p>";
  if (className) html = "<div class='" + className + "'>" + html + "</div>";
  return html;
}

function getProgram(reference) {
  if (reference.type === "extra") return extraPrograms[reference.index];
  return programTopics[reference.group].questions[reference.index];
}

function openTopic(unitIndex, topicIndex) {
  currentUnitIndex = unitIndex;
  var unit = unitData[unitIndex];
  var topic = unit.topics[topicIndex];
  get("topic-unit-label").textContent = "UNIT " + (unitIndex + 1) + " · " + unit.shortTitle.toUpperCase();
  get("topic-title").textContent = topic.title;
  get("topic-overview").textContent = topic.overview;
  get("topic-concept").innerHTML = makeParagraphs(topic.concept);

  var formulas = "";
  for (var i = 0; i < topic.formula.length; i++) formulas += "<div class='formula-line'>" + escapeHTML(topic.formula[i]) + "</div>";
  if (topic.formulaNote) formulas += "<p class='formula-note'>" + escapeHTML(topic.formulaNote) + "</p>";
  get("topic-formula").innerHTML = formulas;
  get("topic-example").innerHTML = makeParagraphs(topic.example, "example-box");

  var steps = "";
  for (var j = 0; j < topic.steps.length; j++) steps += "<li>" + escapeHTML(topic.steps[j]) + "</li>";
  get("topic-steps").innerHTML = steps;

  var points = "";
  for (var k = 0; k < topic.points.length; k++) points += "<li>" + escapeHTML(topic.points[k]) + "</li>";
  get("topic-points").innerHTML = points;
  get("topic-caution").textContent = topic.caution;
  renderRelatedPrograms(topic.programs);
  showView("topic-view");
  setNavigation("home-nav");
}

function getProgramTitle(question) {
  var position = question.indexOf("—");
  if (position < 0) position = question.indexOf("-");
  if (position < 0) return question;
  return question.substring(0, position).trim();
}

function openProgram(type, groupIndex, programIndex) {
  var program;
  var category;
  if (type === "extra") {
    program = extraPrograms[programIndex];
    category = program.category;
  } else {
    program = programTopics[groupIndex].questions[programIndex];
    category = programTopics[groupIndex].name;
  }
  get("program-category-label").textContent = category.toUpperCase();
  get("program-title").textContent = program.title || getProgramTitle(program.q);
  get("program-question").textContent = program.q;
  get("program-code").textContent = program.answer;
  get("program-output").textContent = program.output;
  get("copy-code-button").textContent = "Copy code";
  get("copy-output-button").textContent = "Copy output";
  get("copy-code-button").classList.remove("copied");
  get("copy-output-button").classList.remove("copied");
  showView("program-detail-view");
  setNavigation("programs-nav");
}

function openProgramAction(type, groupIndex, programIndex) {
  return function () { openProgram(type, groupIndex, programIndex); };
}

function addProgramCard(container, type, groupIndex, programIndex, program, category, className) {
  var card = document.createElement("button");
  card.type = "button";
  card.className = className;
  card.innerHTML = "<span class='program-icon'>C</span><span><strong>" + escapeHTML(program.title || getProgramTitle(program.q)) + "</strong><small>" + escapeHTML(category) + "</small></span>";
  card.addEventListener("click", openProgramAction(type, groupIndex, programIndex));
  container.appendChild(card);
}

function renderRelatedPrograms(references) {
  var list = get("related-programs");
  list.innerHTML = "";
  if (references.length === 0) {
    list.innerHTML = "<p class='no-related-programs'>No C program is linked to this concept yet.</p>";
    return;
  }
  for (var i = 0; i < references.length; i++) {
    var ref = references[i];
    var program = getProgram(ref);
    addProgramCard(list, ref.type, ref.group || 0, ref.index, program, "View C answer and sample output", "related-program-card");
  }
}

function renderProgramList() {
  var search = get("program-search").value.toLowerCase().trim();
  var list = get("program-list");
  var count = 0;
  list.innerHTML = "";

  for (var i = 0; i < programTopics.length; i++) {
    var group = programTopics[i];
    var section = document.createElement("section");
    var cards = document.createElement("div");
    section.className = "program-category-section";
    cards.className = "program-category-list";
    for (var j = 0; j < group.questions.length; j++) {
      var program = group.questions[j];
      var words = (program.q + " " + group.name).toLowerCase();
      if (search === "" || words.indexOf(search) >= 0) {
        if (count === 0 || cards.children.length === 0) {
          var heading = document.createElement("h2");
          heading.textContent = group.name;
          section.appendChild(heading);
        }
        addProgramCard(cards, "legacy", i, j, program, group.name, "program-list-card");
        count++;
      }
    }
    if (cards.children.length > 0) {
      section.appendChild(cards);
      list.appendChild(section);
    }
  }

  var extraSection = document.createElement("section");
  var extraCards = document.createElement("div");
  extraSection.className = "program-category-section";
  extraCards.className = "program-category-list";
  for (var k = 0; k < extraPrograms.length; k++) {
    var extra = extraPrograms[k];
    var extraWords = (extra.q + " " + extra.title + " " + extra.category).toLowerCase();
    if (search === "" || extraWords.indexOf(search) >= 0) {
      if (extraCards.children.length === 0) {
        var extraHeading = document.createElement("h2");
        extraHeading.textContent = "NUMERICAL AND ERROR ANALYSIS";
        extraSection.appendChild(extraHeading);
      }
      addProgramCard(extraCards, "extra", 0, k, extra, extra.category, "program-list-card");
      count++;
    }
  }
  if (extraCards.children.length > 0) {
    extraSection.appendChild(extraCards);
    list.appendChild(extraSection);
  }
  get("program-result-count").textContent = count + (count === 1 ? " program" : " programs");
  if (count === 0) list.innerHTML = "<p class='no-related-programs'>No programs match this search.</p>";
}

function showPrograms() {
  get("program-search").value = "";
  renderProgramList();
  showView("programs-view");
  setNavigation("programs-nav");
}

function copyText(text, button) {
  function done() {
    button.textContent = "Copied";
    button.classList.add("copied");
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { copyFallback(text, button, done); });
  } else {
    copyFallback(text, button, done);
  }
}

function copyFallback(text, button, done) {
  var field = document.createElement("textarea");
  field.value = text;
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.appendChild(field);
  field.select();
  var copied = document.execCommand("copy");
  document.body.removeChild(field);
  if (copied) done();
  else button.textContent = "Select text to copy";
}

function searchTopics() {
  var search = get("global-search").value.toLowerCase().trim();
  var results = get("global-search-results");
  results.innerHTML = "";
  if (search === "") return;
  var count = 0;
  for (var i = 0; i < unitData.length; i++) {
    for (var j = 0; j < unitData[i].topics.length; j++) {
      var topic = unitData[i].topics[j];
      var words = (topic.title + " " + topic.overview + " " + topic.concept.join(" ") + " " + topic.formula.join(" ") + " " + topic.points.join(" ")).toLowerCase();
      if (words.indexOf(search) >= 0) {
        var item = document.createElement("button");
        item.type = "button";
        item.className = "search-result";
        item.innerHTML = "<span>" + escapeHTML(topic.title) + "</span><small>UNIT " + (i + 1) + "</small>";
        item.addEventListener("click", makeTopicAction(i, j));
        results.appendChild(item);
        count++;
      }
    }
  }
  if (count === 0) results.innerHTML = "<p class='search-empty'>No matching topics were found.</p>";
}

function startWebsite() {
  renderHome();
  get("home-nav").addEventListener("click", function () { showView("home-view"); setNavigation("home-nav"); });
  get("brand-home").addEventListener("click", function (event) { event.preventDefault(); showView("home-view"); setNavigation("home-nav"); });
  get("programs-nav").addEventListener("click", showPrograms);
  get("hero-programs-button").addEventListener("click", showPrograms);
  get("explore-button").addEventListener("click", function () { get("unit-grid").scrollIntoView({ behavior: "smooth", block: "start" }); });
  get("unit-back-button").addEventListener("click", function () { showView("home-view"); setNavigation("home-nav"); });
  get("topic-back-button").addEventListener("click", function () { openUnit(currentUnitIndex); });
  get("programs-back-button").addEventListener("click", function () { showView("home-view"); setNavigation("home-nav"); });
  get("program-detail-back-button").addEventListener("click", showPrograms);
  get("global-search").addEventListener("input", searchTopics);
  get("program-search").addEventListener("input", renderProgramList);
  get("copy-code-button").addEventListener("click", function () { copyText(get("program-code").textContent, this); });
  get("copy-output-button").addEventListener("click", function () { copyText(get("program-output").textContent, this); });
}

startWebsite();

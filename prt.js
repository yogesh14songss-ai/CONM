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
          "Many real problems cannot be solved conveniently by a short exact formula. A numerical method replaces the original problem with a sequence of arithmetic operations that produces an approximate answer.",
          "Numerical analysis studies the accuracy, stability, convergence and efficiency of these procedures. A numerical method is the actual algorithm used to calculate the answer.",
          "Examples include finding a root of an equation, solving simultaneous equations, estimating a value between observations, approximating an integral and solving a differential equation."
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
          "Exact quantities include a counted number of objects and defined mathematical constants such as 2 in the expression 2 + 3. Measured quantities, such as a length recorded as 12.4 cm, are approximate.",
          "An approximate value is normally written with a limited number of digits. The last retained digit indicates the resolution or precision of the reported value, subject to the measurement process.",
          "Exact and approximate values must not be treated in the same way during error analysis. An exact value can be used as the reference when calculating an error."
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
          "A result is accurate when it is close to the accepted or true value. A set of repeated results is precise when the values are closely grouped, even if the group is not close to the true value.",
          "Significant digits begin with the first non-zero digit. Zeros between non-zero digits are significant. Leading zeros are not significant. Trailing zeros after a decimal point are significant when written to show measured precision.",
          "For multiplication and division, the usual classroom rule is to report no more significant digits than the input with the fewest significant digits. For addition and subtraction, decimal places are normally considered instead."
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
          "Absolute error gives the size of the difference, without showing whether the approximation is above or below the reference value. Relative error compares the absolute error with the magnitude of the reference value.",
          "Percentage error expresses relative error as a percentage. These measures help compare methods and judge whether an approximation is acceptable.",
          "When the exact value is zero, relative error is undefined because it requires division by the reference value. In that case, an absolute error or another suitable scale should be reported."
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
          "Blunders are avoidable human mistakes, such as entering the wrong number or using an incorrect sign. Modelling errors arise when a simplified mathematical model does not represent every feature of the real situation.",
          "Inherent or data errors are already present in the input values, often because of measurement limits or uncertain observations. Numerical errors are introduced by the computational process itself.",
          "The main numerical errors in this syllabus are round-off error, chopping error and truncation error. These errors can accumulate or influence later calculations."
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
          "Chopping removes digits beyond the retained position without changing the last retained digit. Rounding examines the first discarded digit and adjusts the last retained digit according to the rounding rule.",
          "Truncation error occurs when an infinite process or exact expression is replaced by a finite one. For example, using only the first few terms of an infinite series introduces truncation error.",
          "The difference matters because rounding may make the retained value go up or stay the same, while chopping simply discards the extra digits."
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
          "For addition and subtraction, absolute errors combine. A conservative bound is the sum of the absolute input errors.",
          "For multiplication and division, relative errors are often more useful. For small independent errors, the approximate relative error in a product or quotient is bounded by the sum of the relative input errors.",
          "These are first-order estimates for small errors. When uncertainties are large, or when an exact bound is required, the full expression should be analysed rather than relying only on the approximation."
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
          "A floating-point number is represented approximately using a finite number of significant digits and a scale factor. In base 10, a normalized value is commonly written as ±m × 10ᵉ, where 1 ≤ m < 10.",
          "In a computer, the base is usually 2. The significand and exponent are stored with a sign and a finite number of bits. Because the significand has limited length, many real numbers cannot be represented exactly.",
          "Floating-point addition and subtraction require alignment of exponents. Multiplication combines significands and adds exponents. Division divides significands and subtracts exponents. The result may need to be normalized and rounded again."
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
          "A linear equation has the highest power of the variable equal to one. A quadratic equation has degree two. A higher-degree polynomial has degree three or more.",
          "A transcendental equation contains functions such as exponential, logarithmic or trigonometric functions and is generally not a polynomial equation.",
          "A root or solution is a value of x that makes f(x) = 0. Some equations have direct formula-based solutions, while others are solved numerically."
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
          "For some equations, an exact or closed-form solution is available. Linear and quadratic equations are common examples. Such solutions can be found directly using algebraic formulas.",
          "For many higher-degree and transcendental equations, a convenient exact formula is not available. Iterative methods generate a sequence of approximate values that should converge to a root.",
          "Bisection, false position, Newton–Raphson and Birge–Vieta are numerical methods covered in this unit."
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
          "A bracketing method starts with endpoints a and b where a continuous function has opposite signs. The root remains inside the interval as the algorithm narrows it.",
          "Bisection and false position are bracketing methods. They are generally robust when the starting interval is valid, although their convergence can be slower.",
          "Open methods use one or more initial estimates and a formula to create the next estimate. Newton–Raphson is an open method. It can converge quickly, but a poor starting value or a small derivative can cause failure."
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
          "A search interval [a, b] is useful when the function changes sign between its endpoints. A table of f(x) values over a selected range helps locate such intervals.",
          "If a question asks for the largest possible root, the search should cover the relevant range and identify the rightmost valid root interval. The interval must still satisfy the method's conditions.",
          "For an open method, the initial estimate should be reasonably close to the desired root. Graphs, tables, physical limits and algebraic estimates can help choose it."
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
          "If f is continuous on the closed interval [a, b], and a value N lies between f(a) and f(b), then there is at least one point c in [a, b] for which f(c) = N.",
          "For root finding, choose N = 0. If f(a) and f(b) have opposite signs, zero lies between the two endpoint values, so at least one root exists in the interval.",
          "The theorem guarantees existence, not uniqueness. A function may cross zero more than once inside the interval."
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
          "A method may stop when the interval becomes sufficiently small, when the function value is close enough to zero, or when two consecutive estimates differ by less than a specified tolerance.",
          "The tolerance is the acceptable numerical threshold. A maximum iteration count is also useful so the program cannot continue indefinitely if convergence does not occur.",
          "A stopping test should match the method. For bisection, interval width is meaningful. For Newton–Raphson, the change between successive estimates and the residual can both be checked."
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
          "At each iteration, calculate the midpoint of the current interval. Evaluate the function at the midpoint and keep the half-interval that still has opposite signs at its endpoints.",
          "The interval width is reduced by half at each iteration. This predictable reduction gives the method a dependable convergence guarantee for a valid bracket.",
          "The method is usually slower than Newton–Raphson, but it does not require a derivative."
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
          "Like bisection, false position maintains a sign-changing interval. Unlike bisection, its next point is calculated from a linear interpolation of the endpoint values rather than their midpoint.",
          "The endpoint values determine where the secant line crosses the x-axis. The endpoint with the same sign as the new function value is replaced, preserving a bracket.",
          "The method can converge faster than bisection for some functions, but one endpoint may remain fixed for many iterations, slowing convergence."
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
          "At the current estimate xₙ, draw the tangent to y = f(x). The point where that tangent crosses the x-axis is the next approximation xₙ₊₁.",
          "The update uses both the function and its first derivative. The process repeats until the change in estimates or the residual is sufficiently small.",
          "The method is sensitive to the starting estimate. It may fail when the derivative is zero or very small, or when the sequence moves away from the required root."
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
          "The polynomial coefficients are processed using a synthetic-division recurrence at the current estimate x. A second recurrence produces the derivative-related values needed for the correction.",
          "The quotient coefficients are built from the original polynomial coefficients. The last synthetic value gives the polynomial value at x, while the final derivative recurrence value gives the derivative at x.",
          "The estimate is then updated using a Newton-style correction. The method is useful when the polynomial is given by its coefficients."
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
          "A system of n linear equations in n unknowns can be written in matrix form AX = B. The coefficient matrix A contains the coefficients, X contains the unknowns and B contains the constants.",
          "Direct methods perform a finite sequence of elimination or transformation operations. Gauss elimination and Gauss–Jordan are direct methods.",
          "Iterative methods begin with an initial estimate and repeatedly improve the unknown values. Gauss–Seidel is an iterative method."
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
          "The method eliminates the variables below each pivot, one column at a time. After elimination, the last equation contains one unknown, and back substitution is used to solve the remaining equations upward.",
          "A pivot is the diagonal or leading element used to eliminate entries in a column. If a pivot is zero or too small, the method may need a row interchange.",
          "The method is a direct method and is commonly used for systems with a manageable number of equations."
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
          "A zero pivot makes division impossible. A very small pivot can amplify rounding errors and reduce the numerical reliability of the calculation.",
          "In partial pivoting, the row with the largest absolute coefficient in the current pivot column is moved into the pivot position. The other rows are then eliminated as usual.",
          "Pivoting does not change the mathematical solution because swapping equations does not change the system they represent."
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
          "Like Gauss elimination, the method begins with an augmented matrix. Each pivot row is divided by its pivot to make the pivot equal to one.",
          "The pivot column is then eliminated from every other row, both above and below the pivot. When all columns have been processed, the coefficient part becomes the identity matrix.",
          "Unlike ordinary Gauss elimination, a separate back-substitution stage is not needed."
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
          "Each equation is rearranged to make one variable the subject. Starting from initial estimates, the variables are calculated sequentially.",
          "When a new value is found, it is used immediately for the remaining calculations in the same iteration. This is the main difference from the Jacobi method, which uses only values from the previous iteration.",
          "Diagonal dominance is a common sufficient condition that helps convergence, although it is not necessary in every case."
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
          "A table of observed (x, y) values may not contain the exact x-value required. Interpolation uses the known data to estimate the corresponding y-value between the observed points.",
          "Extrapolation uses the same general idea outside the known data range. It is usually less reliable because the behaviour beyond the observations may differ from the pattern inside them.",
          "Polynomial interpolation methods include Newton forward, Newton backward, Newton divided differences and Lagrange interpolation."
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
          "The forward difference is the difference between a value and the next value. The backward difference is the difference between a value and the previous value.",
          "Higher-order differences are obtained by repeating the same operation on the preceding difference column. For equally spaced data generated by a polynomial, higher differences eventually become constant or zero depending on the degree.",
          "A difference table helps identify patterns and supplies the values needed in Newton forward and backward interpolation."
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
          "The first divided difference is the slope between two data points. Higher divided differences are calculated recursively from lower-order divided differences.",
          "Unlike ordinary forward and backward differences, divided differences do not require equal spacing between x-values.",
          "The divided-difference table provides the coefficients for Newton's divided-difference interpolation polynomial."
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
          "Both formulas use finite-difference tables and assume equal spacing h between successive x-values.",
          "The forward formula starts from the first table entry and uses forward differences. The backward formula starts from the last entry and uses backward differences.",
          "The position of the required x-value helps determine which formula is convenient. Values near the beginning favour the forward formula; values near the end favour the backward formula."
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
          "The polynomial is built from a sequence of divided differences. Each new term adds another factor involving the next x-value.",
          "The method is convenient when data points are unequally spaced. A divided-difference table supplies the coefficients.",
          "If another data point is added, the existing polynomial structure can be extended with an additional term."
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
          "Each Lagrange basis polynomial equals one at its own data point and zero at every other supplied data point. A weighted sum of these basis polynomials passes through all the given observations.",
          "The method works for unequal x-spacing and is useful when a direct polynomial expression is required.",
          "For a large data set, repeated evaluation may be less convenient than an incremental Newton form, but the underlying interpolating polynomial is the same when based on the same points."
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
          "In ordinary interpolation, x is supplied and y is estimated. In inverse interpolation, the required y-value is supplied and the corresponding x-value is estimated.",
          "One practical approach is to treat y as the independent variable and x as the dependent variable, then apply an interpolation formula to the reversed data pairs.",
          "The method is most sensible when the data relationship is locally one-to-one, such as a monotonic trend over the selected range."
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
          "The definite integral represents accumulated area or total change over an interval. When an antiderivative is unavailable or impractical, numerical integration can estimate the value.",
          "Newton–Cotes methods use function values at equally spaced points. The trapezoidal rule approximates the curve with straight-line segments. Simpson's rules use parabolic or cubic approximations.",
          "Composite formulas divide the interval into several subintervals. Increasing the number of subintervals can improve accuracy when the assumptions of the method are satisfied."
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
          "For one interval, the area of a trapezoid is the interval width multiplied by the average of the two endpoint heights.",
          "The composite trapezoidal rule applies this idea to n equal subintervals and adds the areas. Every interior function value is counted twice in the total formula.",
          "The method is simple and useful for tabulated data, although it may be less accurate than Simpson's rules for smooth curved functions with a similar number of points."
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
          "The basic Simpson 1/3 rule uses two subintervals and three function values. The composite version applies the same pattern across the complete range.",
          "The coefficients follow the pattern 1, 4, 2, 4, 2, …, 4, 1. The number of subintervals must be even.",
          "For a sufficiently smooth function, Simpson's 1/3 rule is often more accurate than the trapezoidal rule for a comparable spacing."
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
          "The basic 3/8 rule uses four equally spaced points and three subintervals. Its weighted sum gives coefficient 3 to the interior points and coefficient 2 to interior points whose index is a multiple of three in the composite formula.",
          "The composite formula repeats the 3, 3, 2 pattern for interior ordinates. The number of subintervals n must be divisible by three.",
          "The rule is exact for polynomials up to degree three in exact arithmetic."
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
          "A first-order differential equation commonly has the form dy/dx = f(x, y). An initial condition y(x₀) = y₀ specifies the starting point for the numerical solution.",
          "Numerical methods estimate the solution at successive x-values using a chosen step size h. The computed values form a table of approximate solution points.",
          "Euler, modified Euler and Runge–Kutta methods are covered in this syllabus. Their accuracy and amount of computation differ."
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
          "At the current point (xₙ, yₙ), evaluate the derivative f(xₙ, yₙ). Multiply this slope by the step size h and add it to the current y-value.",
          "The method is easy to calculate and implement, but its global error is generally first order in the step size for a smooth problem.",
          "A smaller step size usually improves the approximation, but it also requires more steps."
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
          "First, the predictor uses the starting slope to estimate the next y-value. Next, the corrector evaluates the slope at the predicted endpoint and averages it with the starting slope.",
          "The corrected value can be used again in the correction formula until successive corrected values are sufficiently close. This repeated correction can improve the estimate.",
          "The method is often called the improved Euler or Heun form when one predictor and one average-slope correction are used. Course conventions may vary, so follow the specific formula prescribed in class."
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
          "There are different second-order Runge–Kutta variants. The program in this site uses the midpoint form: it estimates a midpoint slope and uses that slope for the full step.",
          "The first slope is calculated at the beginning of the interval. A second slope is calculated at the midpoint using half of the first estimated change.",
          "The second slope then determines the final update for the interval."
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
          "The four slopes are calculated at the beginning, two midpoint estimates and the end of the interval. The midpoint slopes receive double weight.",
          "The weighted average gives a high-accuracy one-step method for many smooth initial value problems. It does not require higher derivatives of the solution.",
          "The step is repeated until the final x-value is reached. The accuracy still depends on the step size and behaviour of the differential equation."
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
    "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    double trueValue, approximateValue;\n    double absoluteError, relativeError, percentageError;\n\n    printf(\"Enter true value: \");\n    scanf(\"%lf\", &trueValue);\n    printf(\"Enter approximate value: \");\n    scanf(\"%lf\", &approximateValue);\n\n    absoluteError = absolute(trueValue - approximateValue);\n\n    if (trueValue == 0) {\n        printf(\"Relative error is undefined when true value is zero.\\n\");\n        printf(\"Absolute error = %.6f\\n\", absoluteError);\n        return 0;\n    }\n\n    relativeError = absoluteError / absolute(trueValue);\n    percentageError = relativeError * 100.0;\n\n    printf(\"Absolute error = %.6f\\n\", absoluteError);\n    printf(\"Relative error = %.6f\\n\", relativeError);\n    printf(\"Percentage error = %.4f%%\\n\", percentageError);\n\n    return 0;\n}",
    "output": "Enter true value: 10\nEnter approximate value: 9.8\nAbsolute error = 0.200000\nRelative error = 0.020000\nPercentage error = 2.0000%"
  },
  {
    "category": "Numerical and Error Analysis",
    "title": "Compare Chopping and Rounding",
    "q": "Write a C program to display the chopping and rounding of a number to a given number of decimal places.",
    "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    double value, scale = 1.0, chopped, rounded, scaled;\n    long long choppedNumber, roundedNumber;\n    int places, i;\n\n    printf(\"Enter a number: \");\n    scanf(\"%lf\", &value);\n    printf(\"Enter decimal places (0 to 8): \");\n    scanf(\"%d\", &places);\n\n    if (places < 0 || places > 8) {\n        printf(\"Decimal places must be between 0 and 8.\\n\");\n        return 1;\n    }\n\n    for (i = 0; i < places; i++) scale = scale * 10.0;\n    scaled = value * scale;\n    choppedNumber = (long long)scaled;\n    if (scaled >= 0) roundedNumber = (long long)(scaled + 0.5);\n    else roundedNumber = (long long)(scaled - 0.5);\n\n    chopped = choppedNumber / scale;\n    rounded = roundedNumber / scale;\n    printf(\"Chopped value = %.*f\\n\", places, chopped);\n    printf(\"Rounded value = %.*f\\n\", places, rounded);\n    return 0;\n}",
    "output": "Enter a number: 3.14159\nEnter decimal places (0 to 8): 3\nChopped value = 3.141\nRounded value = 3.142"
  },
  {
    "category": "Numerical and Error Analysis",
    "title": "Estimate Error in Addition and Multiplication",
    "q": "Write a C program to estimate maximum absolute error for addition and approximate relative error for multiplication using the absolute uncertainties of two input values.",
    "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    double x, y, dx, dy;\n    double sumError, product, productRelativeError;\n\n    printf(\"Enter x and y: \");\n    scanf(\"%lf %lf\", &x, &y);\n    printf(\"Enter absolute errors in x and y: \");\n    scanf(\"%lf %lf\", &dx, &dy);\n\n    if (dx < 0 || dy < 0) {\n        printf(\"Errors must not be negative.\\n\");\n        return 1;\n    }\n\n    sumError = dx + dy;\n    product = x * y;\n\n    printf(\"Maximum absolute error in sum = %.6f\\n\", sumError);\n\n    if (x == 0 || y == 0) {\n        printf(\"Relative product error estimate is undefined for a zero input.\\n\");\n    } else {\n        productRelativeError = (dx / absolute(x)) + (dy / absolute(y));\n        printf(\"Product = %.6f\\n\", product);\n        printf(\"Approximate relative error in product = %.6f\\n\", productRelativeError);\n        printf(\"Approximate percentage error in product = %.4f%%\\n\", productRelativeError * 100.0);\n    }\n\n    return 0;\n}",
    "output": "Enter x and y: 10 5\nEnter absolute errors in x and y: 0.1 0.05\nMaximum absolute error in sum = 0.150000\nProduct = 50.000000\nApproximate relative error in product = 0.020000\nApproximate percentage error in product = 2.0000%"
  }
];

var programTopics = [
  {
    "name": "ROOT FINDING METHODS",
    "questions": [
      {
        "q": "Bisection Method — Write a C program to find a real root of f(x) = x³ − x − 4 using the Bisection Method. Start with an interval [a, b] for which f(a) and f(b) have opposite signs, and stop when the interval half-width is within the tolerance.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x) {\n    return x * x * x - x - 4.0;\n}\n\nint main(void) {\n    double a, b, eps, c;\n    int iterations = 0;\n\n    printf(\"Enter a, b and tolerance: \");\n    scanf(\"%lf %lf %lf\", &a, &b, &eps);\n\n    if (eps <= 0 || f(a) * f(b) >= 0) {\n        printf(\"Invalid interval or tolerance.\\n\");\n        return 1;\n    }\n\n    while ((b - a) / 2.0 > eps && iterations < 1000) {\n        c = (a + b) / 2.0;\n        if (f(a) * f(c) < 0)\n            b = c;\n        else\n            a = c;\n        iterations++;\n    }\n\n    c = (a + b) / 2.0;\n    printf(\"Approximate root = %.6f\\n\", c);\n    printf(\"Iterations = %d\\n\", iterations);\n    return 0;\n}",
        "output": "Enter a, b and tolerance: 1 2 0.0001\nApproximate root = 1.796326\nIterations = 13"
      },
      {
        "q": "False Position (Regula Falsi) Method — Write a C program to solve f(x) = x³ − x − 4 by the False Position Method. Read the lower endpoint, upper endpoint and tolerance; reject an interval whose endpoints do not bracket a root.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\ndouble f(double x) {\n    return x * x * x - x - 4.0;\n}\n\nint main(void) {\n    double a, b, eps, c, fa, fb, fc;\n    int iterations = 0;\n\n    printf(\"Enter a, b and tolerance: \");\n    scanf(\"%lf %lf %lf\", &a, &b, &eps);\n    fa = f(a);\n    fb = f(b);\n\n    if (eps <= 0 || fa * fb >= 0) {\n        printf(\"Invalid interval or tolerance.\\n\");\n        return 1;\n    }\n\n    do {\n        c = (a * fb - b * fa) / (fb - fa);\n        fc = f(c);\n        if (fa * fc < 0) {\n            b = c;\n            fb = fc;\n        } else {\n            a = c;\n            fa = fc;\n        }\n        iterations++;\n    } while (absolute(fc) > eps && iterations < 1000);\n\n    printf(\"Approximate root = %.6f\\n\", c);\n    printf(\"Iterations = %d\\n\", iterations);\n    return 0;\n}",
        "output": "Enter a, b and tolerance: 1 2 0.0001\nApproximate root = 1.796319\nIterations = 6"
      },
      {
        "q": "Newton–Raphson Method — Write a C program to find a root of f(x) = x³ − x − 4 using the Newton–Raphson Method. Use f′(x) = 3x² − 1, an initial estimate x₀, and a stopping tolerance.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\ndouble f(double x) {\n    return x * x * x - x - 4.0;\n}\n\ndouble df(double x) {\n    return 3.0 * x * x - 1.0;\n}\n\nint main(void) {\n    double x, next, eps;\n    int iterations = 0;\n\n    printf(\"Enter initial guess and tolerance: \");\n    scanf(\"%lf %lf\", &x, &eps);\n    if (eps <= 0) {\n        printf(\"Tolerance must be positive.\\n\");\n        return 1;\n    }\n\n    do {\n        double slope = df(x);\n        if (absolute(slope) < 1e-12) {\n            printf(\"Derivative is too small.\\n\");\n            return 1;\n        }\n        next = x - f(x) / slope;\n        iterations++;\n        if (absolute(next - x) < eps) {\n            x = next;\n            break;\n        }\n        x = next;\n    } while (iterations < 1000);\n\n    printf(\"Approximate root = %.6f\\n\", x);\n    printf(\"Iterations = %d\\n\", iterations);\n    return 0;\n}",
        "output": "Enter initial guess and tolerance: 2 0.0001\nApproximate root = 1.796322\nIterations = 4"
      },
      {
        "q": "Birge–Vieta Method — Write a C program to estimate a root of a polynomial using the Birge–Vieta Method. Enter the degree, coefficients from highest power to constant term, the initial estimate, tolerance and maximum iterations. The sample polynomial is x³ − 6x² + 11x − 6.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    int n, maxIter, iter, i;\n    double a[20 + 1], b[20 + 1], c[20];\n    double x, next, eps;\n\n    printf(\"Enter polynomial degree (1-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 1 || n > 20) {\n        printf(\"Invalid degree.\\n\");\n        return 1;\n    }\n    printf(\"Enter %d coefficients, highest power first: \", n + 1);\n    for (i = 0; i <= n; i++) scanf(\"%lf\", &a[i]);\n    printf(\"Enter initial guess: \");\n    scanf(\"%lf\", &x);\n    printf(\"Enter tolerance: \");\n    scanf(\"%lf\", &eps);\n    printf(\"Enter maximum iterations: \");\n    scanf(\"%d\", &maxIter);\n\n    if (eps <= 0 || maxIter < 1 || absolute(a[0]) < 1e-12) {\n        printf(\"Invalid input.\\n\");\n        return 1;\n    }\n\n    for (iter = 1; iter <= maxIter; iter++) {\n        b[0] = a[0];\n        for (i = 1; i <= n; i++) b[i] = a[i] + x * b[i - 1];\n        c[0] = b[0];\n        for (i = 1; i < n; i++) c[i] = b[i] + x * c[i - 1];\n        if (absolute(c[n - 1]) < 1e-12) {\n            printf(\"Derivative is too small; iteration stopped.\\n\");\n            return 1;\n        }\n        next = x - b[n] / c[n - 1];\n        if (absolute(next - x) < eps) {\n            x = next;\n            break;\n        }\n        x = next;\n    }\n\n    printf(\"Approximate root = %.6f\\n\", x);\n    printf(\"Iterations = %d\\n\", iter <= maxIter ? iter : maxIter);\n    return 0;\n}",
        "output": "Enter polynomial degree (1-20): 3\nEnter 4 coefficients, highest power first: 1 -6 11 -6\nEnter initial guess: 4\nEnter tolerance: 0.0001\nEnter maximum iterations: 100\nApproximate root = 3.000000\nIterations = 6"
      }
    ]
  },
  {
    "name": "SYSTEMS OF LINEAR EQUATIONS",
    "questions": [
      {
        "q": "Gauss Elimination Method — Write a C program to solve a system of linear equations using Gauss Elimination. Enter n and the n × (n+1) augmented matrix. The sample system has solution x₁ = 2, x₂ = 3, x₃ = −1.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    int n, i, j, k, pivot;\n    double a[10][10 + 1], x[10], factor, temp;\n\n    printf(\"Enter number of equations (1-%d): \", 10);\n    scanf(\"%d\", &n);\n    if (n < 1 || n > 10) return 1;\n\n    printf(\"Enter each row of the augmented matrix (n coefficients and RHS):\\n\");\n    for (i = 0; i < n; i++)\n        for (j = 0; j <= n; j++) scanf(\"%lf\", &a[i][j]);\n\n    for (k = 0; k < n - 1; k++) {\n        pivot = k;\n        for (i = k + 1; i < n; i++)\n            if (absolute(a[i][k]) > absolute(a[pivot][k])) pivot = i;\n        if (absolute(a[pivot][k]) < 1e-12) {\n            printf(\"System has no unique solution.\\n\");\n            return 1;\n        }\n        if (pivot != k)\n            for (j = k; j <= n; j++) {\n                temp = a[k][j]; a[k][j] = a[pivot][j]; a[pivot][j] = temp;\n            }\n        for (i = k + 1; i < n; i++) {\n            factor = a[i][k] / a[k][k];\n            for (j = k; j <= n; j++) a[i][j] -= factor * a[k][j];\n        }\n    }\n    if (absolute(a[n - 1][n - 1]) < 1e-12) {\n        printf(\"System has no unique solution.\\n\");\n        return 1;\n    }\n    for (i = n - 1; i >= 0; i--) {\n        x[i] = a[i][n];\n        for (j = i + 1; j < n; j++) x[i] -= a[i][j] * x[j];\n        x[i] /= a[i][i];\n    }\n    printf(\"Solution:\\n\");\n    for (i = 0; i < n; i++) printf(\"x%d = %.6f\\n\", i + 1, x[i]);\n    return 0;\n}",
        "output": "Enter number of equations (1-10): 3\nEnter each row of the augmented matrix (n coefficients and RHS):\n2 1 -1 8\n-3 -1 2 -11\n-2 1 2 -3\nSolution:\nx1 = 2.000000\nx2 = 3.000000\nx3 = -1.000000"
      },
      {
        "q": "Gauss–Jordan Method — Write a C program to solve simultaneous linear equations using the Gauss–Jordan Method. Normalize each pivot row and eliminate the pivot column from every other row.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    int n, i, j, k, pivot;\n    double a[10][10 + 1], temp, factor;\n\n    printf(\"Enter number of equations (1-%d): \", 10);\n    scanf(\"%d\", &n);\n    if (n < 1 || n > 10) return 1;\n    printf(\"Enter each row of the augmented matrix (n coefficients and RHS):\\n\");\n    for (i = 0; i < n; i++)\n        for (j = 0; j <= n; j++) scanf(\"%lf\", &a[i][j]);\n\n    for (k = 0; k < n; k++) {\n        pivot = k;\n        for (i = k + 1; i < n; i++)\n            if (absolute(a[i][k]) > absolute(a[pivot][k])) pivot = i;\n        if (absolute(a[pivot][k]) < 1e-12) {\n            printf(\"System has no unique solution.\\n\");\n            return 1;\n        }\n        if (pivot != k)\n            for (j = 0; j <= n; j++) {\n                temp = a[k][j]; a[k][j] = a[pivot][j]; a[pivot][j] = temp;\n            }\n        temp = a[k][k];\n        for (j = 0; j <= n; j++) a[k][j] /= temp;\n        for (i = 0; i < n; i++) {\n            if (i == k) continue;\n            factor = a[i][k];\n            for (j = 0; j <= n; j++) a[i][j] -= factor * a[k][j];\n        }\n    }\n    printf(\"Solution:\\n\");\n    for (i = 0; i < n; i++) printf(\"x%d = %.6f\\n\", i + 1, a[i][n]);\n    return 0;\n}",
        "output": "Enter number of equations (1-10): 3\nEnter each row of the augmented matrix (n coefficients and RHS):\n2 1 -1 8\n-3 -1 2 -11\n-2 1 2 -3\nSolution:\nx1 = 2.000000\nx2 = 3.000000\nx3 = -1.000000"
      },
      {
        "q": "Gauss–Seidel Iteration Method — Write a C program to solve a diagonally dominant linear system using the Gauss–Seidel Method. Stop when the largest change in any variable is smaller than the selected tolerance or when the iteration limit is reached.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\nint main(void) {\n    int n, i, j, iter, maxIter;\n    double a[10][10], b[10], x[10] = {0}, old[10];\n    double eps, sum, largestChange;\n\n    printf(\"Enter number of equations (1-%d): \", 10);\n    scanf(\"%d\", &n);\n    if (n < 1 || n > 10) return 1;\n    printf(\"Enter the coefficient matrix:\\n\");\n    for (i = 0; i < n; i++)\n        for (j = 0; j < n; j++) scanf(\"%lf\", &a[i][j]);\n    printf(\"Enter the RHS values:\\n\");\n    for (i = 0; i < n; i++) scanf(\"%lf\", &b[i]);\n    printf(\"Enter maximum iterations and tolerance: \");\n    scanf(\"%d %lf\", &maxIter, &eps);\n\n    for (i = 0; i < n; i++)\n        if (absolute(a[i][i]) < 1e-12) {\n            printf(\"Zero diagonal entry; reorder the equations.\\n\");\n            return 1;\n        }\n\n    for (iter = 1; iter <= maxIter; iter++) {\n        for (i = 0; i < n; i++) old[i] = x[i];\n        for (i = 0; i < n; i++) {\n            sum = b[i];\n            for (j = 0; j < n; j++) if (j != i) sum -= a[i][j] * x[j];\n            x[i] = sum / a[i][i];\n        }\n        largestChange = 0;\n        for (i = 0; i < n; i++)\n            if (absolute(x[i] - old[i]) > largestChange) largestChange = absolute(x[i] - old[i]);\n        if (largestChange < eps) break;\n    }\n\n    printf(\"Approximate solution after %d iteration(s):\\n\", iter <= maxIter ? iter : maxIter);\n    for (i = 0; i < n; i++) printf(\"x%d = %.6f\\n\", i + 1, x[i]);\n    return 0;\n}",
        "output": "Enter number of equations (1-10): 3\nEnter the coefficient matrix:\n10 -1 2\n-1 11 -1\n2 -1 10\nEnter the RHS values:\n6 22 -10\nEnter maximum iterations and tolerance: 100 0.000001\nApproximate solution after 7 iteration(s):\nx1 = 1.000000\nx2 = 2.000000\nx3 = -1.000000"
      }
    ]
  },
  {
    "name": "FINITE DIFFERENCE TABLES",
    "questions": [
      {
        "q": "Newton Forward Difference Table — Write a C program to generate a Newton Forward Difference Table from equally spaced (x, y) data. The sample data are (0,1), (1,2), (2,5), and (3,10).",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n, i, j;\n    double x[20], d[20][20];\n\n    printf(\"Enter number of data points (2-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 2 || n > 20) return 1;\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++) {\n        scanf(\"%lf %lf\", &x[i], &d[i][0]);\n    }\n    for (j = 1; j < n; j++)\n        for (i = 0; i < n - j; i++)\n            d[i][j] = d[i + 1][j - 1] - d[i][j - 1];\n\n    printf(\"\\nForward Difference Table\\n\");\n    printf(\"     x          y\");\n    for (j = 1; j < n; j++) printf(\"       D^%d y\", j);\n    printf(\"\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"%6.2f\", x[i]);\n        for (j = 0; j < n - i; j++) printf(\" %10.2f\", d[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "output": "Enter number of data points (2-20): 4\nEnter each x and y pair:\n0 1\n1 2\n2 5\n3 10\n\nForward Difference Table\n     x          y       D^1 y       D^2 y       D^3 y\n  0.00       1.00       1.00       2.00       0.00\n  1.00       2.00       3.00       2.00\n  2.00       5.00       5.00\n  3.00      10.00"
      },
      {
        "q": "Newton Backward Difference Table — Write a C program to generate a Newton Backward Difference Table for equally spaced (x, y) data. Use the sample points (0,1), (1,2), (2,5), and (3,10).",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n, i, j;\n    double x[20], d[20][20] = {{0}};\n\n    printf(\"Enter number of data points (2-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 2 || n > 20) return 1;\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++) scanf(\"%lf %lf\", &x[i], &d[i][0]);\n\n    for (j = 1; j < n; j++)\n        for (i = j; i < n; i++)\n            d[i][j] = d[i][j - 1] - d[i - 1][j - 1];\n\n    printf(\"\\nBackward Difference Table\\n\");\n    printf(\"     x          y\");\n    for (j = 1; j < n; j++) printf(\"       d^%d y\", j);\n    printf(\"\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"%6.2f\", x[i]);\n        for (j = 0; j < n; j++) {\n            if (j <= i) printf(\" %10.2f\", d[i][j]);\n            else printf(\" %10s\", \"\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "output": "Enter number of data points (2-20): 4\nEnter each x and y pair:\n0 1\n1 2\n2 5\n3 10\n\nBackward Difference Table\n     x          y       d^1 y       d^2 y       d^3 y\n  0.00       1.00\n  1.00       2.00       1.00\n  2.00       5.00       3.00       2.00\n  3.00      10.00       5.00       2.00       0.00"
      },
      {
        "q": "Newton Divided Difference Table — Write a C program to construct a Newton Divided Difference Table from the points (1,1), (2,4), and (3,9).",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n, i, j;\n    double x[20], d[20][20] = {{0}};\n\n    printf(\"Enter number of data points (2-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 2 || n > 20) return 1;\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++) scanf(\"%lf %lf\", &x[i], &d[i][0]);\n\n    for (j = 1; j < n; j++)\n        for (i = 0; i < n - j; i++) {\n            double denominator = x[i + j] - x[i];\n            if (denominator == 0.0) {\n                printf(\"x values must be distinct.\\n\");\n                return 1;\n            }\n            d[i][j] = (d[i + 1][j - 1] - d[i][j - 1]) / denominator;\n        }\n\n    printf(\"\\nDivided Difference Table\\n\");\n    printf(\"     x         f[x]\");\n    for (j = 1; j < n; j++) printf(\"      DD^%d\", j);\n    printf(\"\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"%6.2f\", x[i]);\n        for (j = 0; j < n - i; j++) printf(\" %10.4f\", d[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "output": "Enter number of data points (2-20): 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\n\nDivided Difference Table\n     x         f[x]      DD^1      DD^2\n  1.00     1.0000     3.0000     1.0000\n  2.00     4.0000     5.0000\n  3.00     9.0000"
      }
    ]
  },
  {
    "name": "INTERPOLATION",
    "questions": [
      {
        "q": "Newton Divided Difference Interpolation — Write a C program to evaluate the Newton Divided Difference Interpolation Polynomial for the points (1,1), (2,4), (3,9). Find y when x = 2.5.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n, i, j;\n    double x[20], dd[20], value, result;\n\n    printf(\"Enter number of data points (2-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 2 || n > 20) return 1;\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++) scanf(\"%lf %lf\", &x[i], &dd[i]);\n    printf(\"Enter x at which y is required: \");\n    scanf(\"%lf\", &value);\n\n    for (j = 1; j < n; j++)\n        for (i = n - 1; i >= j; i--) {\n            double denominator = x[i] - x[i - j];\n            if (denominator == 0.0) {\n                printf(\"x values must be distinct.\\n\");\n                return 1;\n            }\n            dd[i] = (dd[i] - dd[i - 1]) / denominator;\n        }\n\n    result = dd[n - 1];\n    for (i = n - 2; i >= 0; i--) result = dd[i] + (value - x[i]) * result;\n    printf(\"Interpolated value y = %.6f\\n\", result);\n    return 0;\n}",
        "output": "Enter number of data points (2-20): 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\nEnter x at which y is required: 2.5\nInterpolated value y = 6.250000"
      },
      {
        "q": "Lagrange Interpolation Polynomial — Write a C program to find an interpolated value using the Lagrange Interpolation Polynomial. Use the data points (1,1), (2,4), (3,9) and find y at x = 2.5.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n, i, j;\n    double x[20], y[20], value, sum = 0.0, product;\n\n    printf(\"Enter number of data points (2-%d): \", 20);\n    scanf(\"%d\", &n);\n    if (n < 2 || n > 20) return 1;\n    printf(\"Enter each x and y pair:\\n\");\n    for (i = 0; i < n; i++) scanf(\"%lf %lf\", &x[i], &y[i]);\n    printf(\"Enter x at which y is required: \");\n    scanf(\"%lf\", &value);\n\n    for (i = 0; i < n; i++) {\n        product = y[i];\n        for (j = 0; j < n; j++) {\n            if (j != i) {\n                if (x[i] == x[j]) {\n                    printf(\"x values must be distinct.\\n\");\n                    return 1;\n                }\n                product *= (value - x[j]) / (x[i] - x[j]);\n            }\n        }\n        sum += product;\n    }\n    printf(\"Interpolated value y = %.6f\\n\", sum);\n    return 0;\n}",
        "output": "Enter number of data points (2-20): 3\nEnter each x and y pair:\n1 1\n2 4\n3 9\nEnter x at which y is required: 2.5\nInterpolated value y = 6.250000"
      }
    ]
  },
  {
    "name": "NUMERICAL INTEGRATION",
    "questions": [
      {
        "q": "Trapezoidal Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using the composite Trapezoidal Rule. Enter the integration limits and number of subintervals.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x) {\n    return 1.0 / (1.0 + x * x * x * x);\n}\n\nint main(void) {\n    double a, b, h, sum, integral;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n    printf(\"Enter number of subintervals: \");\n    scanf(\"%d\", &n);\n    if (n < 1 || b <= a) {\n        printf(\"Invalid limits or number of subintervals.\\n\");\n        return 1;\n    }\n\n    h = (b - a) / n;\n    sum = (f(a) + f(b)) / 2.0;\n    for (i = 1; i < n; i++) sum += f(a + i * h);\n    integral = h * sum;\n    printf(\"Approximate integral = %.6f\\n\", integral);\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter number of subintervals: 4\nApproximate integral = 0.861732"
      },
      {
        "q": "Simpson’s 1/3 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using Simpson’s 1/3 Rule. The number of subintervals n must be positive and even.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x) {\n    return 1.0 / (1.0 + x * x * x * x);\n}\n\nint main(void) {\n    double a, b, h, sum;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n    printf(\"Enter an even number of subintervals: \");\n    scanf(\"%d\", &n);\n    if (n <= 0 || n % 2 != 0 || b <= a) {\n        printf(\"Simpson's 1/3 Rule needs b > a and a positive even n.\\n\");\n        return 1;\n    }\n\n    h = (b - a) / n;\n    sum = f(a) + f(b);\n    for (i = 1; i < n; i++) {\n        if (i % 2 == 0) sum += 2.0 * f(a + i * h);\n        else sum += 4.0 * f(a + i * h);\n    }\n    printf(\"Approximate integral = %.6f\\n\", h * sum / 3.0);\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter an even number of subintervals: 4\nApproximate integral = 0.867114"
      },
      {
        "q": "Simpson’s 3/8 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x²) from a to b using Simpson’s 3/8 Rule. The number of subintervals must be a positive multiple of three.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x) {\n    return 1.0 / (1.0 + x * x);\n}\n\nint main(void) {\n    double a, b, h, sum;\n    int n, i;\n\n    printf(\"Enter lower and upper limits a, b: \");\n    scanf(\"%lf %lf\", &a, &b);\n    printf(\"Enter number of subintervals (multiple of 3): \");\n    scanf(\"%d\", &n);\n    if (n <= 0 || n % 3 != 0 || b <= a) {\n        printf(\"Simpson's 3/8 Rule needs b > a and n divisible by 3.\\n\");\n        return 1;\n    }\n\n    h = (b - a) / n;\n    sum = f(a) + f(b);\n    for (i = 1; i < n; i++) {\n        if (i % 3 == 0) sum += 2.0 * f(a + i * h);\n        else sum += 3.0 * f(a + i * h);\n    }\n    printf(\"Approximate integral = %.6f\\n\", 3.0 * h * sum / 8.0);\n    return 0;\n}",
        "output": "Enter lower and upper limits a, b: 0 1\nEnter number of subintervals (multiple of 3): 3\nApproximate integral = 0.784615"
      }
    ]
  },
  {
    "name": "NUMERICAL SOLUTION OF ODES",
    "questions": [
      {
        "q": "Euler’s Method — Write a C program for Euler’s Method using the differential equation dy/dx = x·y. Read the initial condition (x₀, y₀), final x-value and number of steps, and print the calculated values at each step.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x, double y) {\n    return x * y;\n}\n\nint main(void) {\n    double x, y, xn, h;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &xn);\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n    if (n <= 0 || xn == x) {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 1;\n    }\n\n    h = (xn - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n    for (i = 0; i < n; i++) {\n        y = y + h * f(x, y);\n        x = x + h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n    printf(\"Approximate y(%.4f) = %.6f\\n\", xn, y);\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0.1 1\nEnter final x value: 0.5\nEnter number of steps: 4\n\n       x          y\n  0.1000   1.000000\n  0.2000   1.010000\n  0.3000   1.030200\n  0.4000   1.061106\n  0.5000   1.103550\nApproximate y(0.5000) = 1.103550"
      },
      {
        "q": "Modified Euler’s Method — Write a C program for the Modified Euler Method using dy/dx = x² + y. Use a predictor step and repeatedly correct the next y-value with the average of the beginning and ending slopes until the correction tolerance is met.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\ndouble f(double x, double y) {\n    return x * x + y;\n}\n\nint main(void) {\n    double x, y, xn, h, eps, slopeStart, guess, corrected, error;\n    int n, i, correction;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &xn);\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n    printf(\"Enter correction tolerance: \");\n    scanf(\"%lf\", &eps);\n    if (n <= 0 || xn == x || eps <= 0) {\n        printf(\"Invalid input.\\n\");\n        return 1;\n    }\n\n    h = (xn - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n    for (i = 0; i < n; i++) {\n        slopeStart = f(x, y);\n        guess = y + h * slopeStart;\n        for (correction = 0; correction < 1000; correction++) {\n            corrected = y + (h / 2.0) * (slopeStart + f(x + h, guess));\n            error = absolute(corrected - guess);\n            guess = corrected;\n            if (error < eps) break;\n        }\n        y = guess;\n        x += h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n    printf(\"Approximate y(%.4f) = %.6f\\n\", xn, y);\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0 1\nEnter final x value: 0.2\nEnter number of steps: 2\nEnter correction tolerance: 0.00001\n\n       x          y\n  0.0000   1.000000\n  0.1000   1.105789\n  0.2000   1.224820\nApproximate y(0.2000) = 1.224820"
      },
      {
        "q": "Runge–Kutta Second-Order Method — Write a C program for the second-order Runge–Kutta midpoint method for dy/dx = x·y. Read the initial condition, final x-value and step count, and print the approximate solution at every step.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble f(double x, double y) {\n    return x * y;\n}\n\nint main(void) {\n    double x, y, xn, h, k1, k2;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &xn);\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n    if (n <= 0 || xn == x) {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 1;\n    }\n\n    h = (xn - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n    for (i = 0; i < n; i++) {\n        k1 = h * f(x, y);\n        k2 = h * f(x + h / 2.0, y + k1 / 2.0);\n        y += k2;\n        x += h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n    printf(\"Approximate y(%.4f) = %.6f\\n\", xn, y);\n    return 0;\n}",
        "output": "Enter initial x0 and y0: 0.1 1\nEnter final x value: 0.5\nEnter number of steps: 4\n\n       x          y\n  0.1000   1.000000\n  0.2000   1.015075\n  0.3000   1.040706\n  0.4000   1.077677\n  0.5000   1.127142\nApproximate y(0.5000) = 1.127142"
      },
      {
        "q": "Runge–Kutta Fourth-Order Method — Write a C program for the fourth-order Runge–Kutta Method. The source’s example function is dy/dx = (y² − x²) / (y² + x²). Read the initial condition, final x-value and step count, then print the table and final approximation.",
        "answer": "#include <stdio.h>\n#include <stdlib.h>\n\ndouble absolute(double value) {\n    if (value < 0) return -value;\n    return value;\n}\n\ndouble f(double x, double y) {\n    double denominator = y * y + x * x;\n    if (absolute(denominator) < 1e-12) return 0.0;\n    return (y * y - x * x) / denominator;\n}\n\nint main(void) {\n    double x, y, xn, h, k1, k2, k3, k4;\n    int n, i;\n\n    printf(\"Enter initial x0 and y0: \");\n    scanf(\"%lf %lf\", &x, &y);\n    printf(\"Enter final x value: \");\n    scanf(\"%lf\", &xn);\n    printf(\"Enter number of steps: \");\n    scanf(\"%d\", &n);\n    if (n <= 0 || xn == x) {\n        printf(\"Invalid final value or number of steps.\\n\");\n        return 1;\n    }\n\n    h = (xn - x) / n;\n    printf(\"\\n       x          y\\n\");\n    printf(\"%8.4f %10.6f\\n\", x, y);\n    for (i = 0; i < n; i++) {\n        k1 = h * f(x, y);\n        k2 = h * f(x + h / 2.0, y + k1 / 2.0);\n        k3 = h * f(x + h / 2.0, y + k2 / 2.0);\n        k4 = h * f(x + h, y + k3);\n        y += (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;\n        x += h;\n        printf(\"%8.4f %10.6f\\n\", x, y);\n    }\n    printf(\"Approximate y(%.4f) = %.6f\\n\", xn, y);\n    return 0;\n}",
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

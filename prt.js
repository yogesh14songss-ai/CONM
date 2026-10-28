/* CONM Assignment: questions, C answers and outputs are defined here. */
var topics = [
    { name: "ROOT FINDING METHODS", questions: [
        {
            q: `Bisection Method — Write a C program to find a real root of f(x) = x³ − x − 4 using the Bisection Method. Start with an interval [a, b] for which f(a) and f(b) have opposite signs, and stop when the interval half-width is within the tolerance.`,
            answer: `#include <stdio.h>
#include <math.h>

double f(double x) {
    return x * x * x - x - 4.0;
}

int main(void) {
    double a, b, eps, c;
    int iterations = 0;

    printf("Enter a, b and tolerance: ");
    scanf("%lf %lf %lf", &a, &b, &eps);

    if (eps <= 0 || f(a) * f(b) >= 0) {
        printf("Invalid interval or tolerance.\\n");
        return 1;
    }

    while ((b - a) / 2.0 > eps && iterations < 1000) {
        c = (a + b) / 2.0;
        if (f(a) * f(c) < 0)
            b = c;
        else
            a = c;
        iterations++;
    }

    c = (a + b) / 2.0;
    printf("Approximate root = %.6f\\n", c);
    printf("Iterations = %d\\n", iterations);
    return 0;
}`,
            output: `Enter a, b and tolerance: Approximate root = 1.796326
Iterations = 13`
        },
        {
            q: `False Position (Regula Falsi) Method — Write a C program to solve f(x) = x³ − x − 4 by the False Position Method. Read the lower endpoint, upper endpoint and tolerance; reject an interval whose endpoints do not bracket a root.`,
            answer: `#include <stdio.h>
#include <math.h>

double f(double x) {
    return x * x * x - x - 4.0;
}

int main(void) {
    double a, b, eps, c, fa, fb, fc;
    int iterations = 0;

    printf("Enter a, b and tolerance: ");
    scanf("%lf %lf %lf", &a, &b, &eps);
    fa = f(a);
    fb = f(b);

    if (eps <= 0 || fa * fb >= 0) {
        printf("Invalid interval or tolerance.\\n");
        return 1;
    }

    do {
        c = (a * fb - b * fa) / (fb - fa);
        fc = f(c);
        if (fa * fc < 0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }
        iterations++;
    } while (fabs(fc) > eps && iterations < 1000);

    printf("Approximate root = %.6f\\n", c);
    printf("Iterations = %d\\n", iterations);
    return 0;
}`,
            output: `Enter a, b and tolerance: Approximate root = 1.796322
Iterations = 8`
        },
        {
            q: `Newton–Raphson Method — Write a C program to find a root of f(x) = x³ − x − 4 using the Newton–Raphson Method. Use f′(x) = 3x² − 1, an initial estimate x₀, and a stopping tolerance.`,
            answer: `#include <stdio.h>
#include <math.h>

double f(double x) {
    return x * x * x - x - 4.0;
}

double df(double x) {
    return 3.0 * x * x - 1.0;
}

int main(void) {
    double x, next, eps;
    int iterations = 0;

    printf("Enter initial guess and tolerance: ");
    scanf("%lf %lf", &x, &eps);
    if (eps <= 0) {
        printf("Tolerance must be positive.\\n");
        return 1;
    }

    do {
        double slope = df(x);
        if (fabs(slope) < 1e-12) {
            printf("Derivative is too small.\\n");
            return 1;
        }
        next = x - f(x) / slope;
        iterations++;
        if (fabs(next - x) < eps) {
            x = next;
            break;
        }
        x = next;
    } while (iterations < 1000);

    printf("Approximate root = %.6f\\n", x);
    printf("Iterations = %d\\n", iterations);
    return 0;
}`,
            output: `Enter initial guess and tolerance: Approximate root = 1.796322
Iterations = 5`
        },
        {
            q: `Birge–Vieta Method — Write a C program to estimate a root of a polynomial using the Birge–Vieta Method. Enter the degree, coefficients from highest power to constant term, the initial estimate, tolerance and maximum iterations. The sample polynomial is x³ − 6x² + 11x − 6.`,
            answer: `#include <stdio.h>
#include <math.h>

#define MAX_DEGREE 20

int main(void) {
    int n, maxIter, iter, i;
    double a[MAX_DEGREE + 1], b[MAX_DEGREE + 1], c[MAX_DEGREE];
    double x, next, eps;

    printf("Enter polynomial degree (1-%d): ", MAX_DEGREE);
    scanf("%d", &n);
    if (n < 1 || n > MAX_DEGREE) {
        printf("Invalid degree.\\n");
        return 1;
    }
    printf("Enter %d coefficients, highest power first: ", n + 1);
    for (i = 0; i <= n; i++) scanf("%lf", &a[i]);
    printf("Enter initial guess: ");
    scanf("%lf", &x);
    printf("Enter tolerance: ");
    scanf("%lf", &eps);
    printf("Enter maximum iterations: ");
    scanf("%d", &maxIter);

    if (eps <= 0 || maxIter < 1 || fabs(a[0]) < 1e-12) {
        printf("Invalid input.\\n");
        return 1;
    }

    for (iter = 1; iter <= maxIter; iter++) {
        b[0] = a[0];
        for (i = 1; i <= n; i++) b[i] = a[i] + x * b[i - 1];
        c[0] = b[0];
        for (i = 1; i < n; i++) c[i] = b[i] + x * c[i - 1];
        if (fabs(c[n - 1]) < 1e-12) {
            printf("Derivative is too small; iteration stopped.\\n");
            return 1;
        }
        next = x - b[n] / c[n - 1];
        if (fabs(next - x) < eps) {
            x = next;
            break;
        }
        x = next;
    }

    printf("Approximate root = %.6f\\n", x);
    printf("Iterations = %d\\n", iter <= maxIter ? iter : maxIter);
    return 0;
}`,
            output: `Enter polynomial degree (1-20): Enter 4 coefficients, highest power first: Enter initial guess: Enter tolerance: Enter maximum iterations: Approximate root = 3.000000
Iterations = 6`
        }
    ] },
    { name: "SYSTEMS OF LINEAR EQUATIONS", questions: [
        {
            q: `Gauss Elimination Method — Write a C program to solve a system of linear equations using Gauss Elimination. Enter n and the n × (n+1) augmented matrix. The sample system has solution x₁ = 2, x₂ = 3, x₃ = −1.`,
            answer: `#include <stdio.h>
#include <math.h>

#define MAX 10

int main(void) {
    int n, i, j, k, pivot;
    double a[MAX][MAX + 1], x[MAX], factor, temp;

    printf("Enter number of equations (1-%d): ", MAX);
    scanf("%d", &n);
    if (n < 1 || n > MAX) return 1;

    printf("Enter each row of the augmented matrix (n coefficients and RHS):\\n");
    for (i = 0; i < n; i++)
        for (j = 0; j <= n; j++) scanf("%lf", &a[i][j]);

    for (k = 0; k < n - 1; k++) {
        pivot = k;
        for (i = k + 1; i < n; i++)
            if (fabs(a[i][k]) > fabs(a[pivot][k])) pivot = i;
        if (fabs(a[pivot][k]) < 1e-12) {
            printf("System has no unique solution.\\n");
            return 1;
        }
        if (pivot != k)
            for (j = k; j <= n; j++) {
                temp = a[k][j]; a[k][j] = a[pivot][j]; a[pivot][j] = temp;
            }
        for (i = k + 1; i < n; i++) {
            factor = a[i][k] / a[k][k];
            for (j = k; j <= n; j++) a[i][j] -= factor * a[k][j];
        }
    }
    if (fabs(a[n - 1][n - 1]) < 1e-12) {
        printf("System has no unique solution.\\n");
        return 1;
    }
    for (i = n - 1; i >= 0; i--) {
        x[i] = a[i][n];
        for (j = i + 1; j < n; j++) x[i] -= a[i][j] * x[j];
        x[i] /= a[i][i];
    }
    printf("Solution:\\n");
    for (i = 0; i < n; i++) printf("x%d = %.6f\\n", i + 1, x[i]);
    return 0;
}`,
            output: `Enter number of equations (1-10): Enter each row of the augmented matrix (n coefficients and RHS):
Solution:
x1 = 2.000000
x2 = 3.000000
x3 = -1.000000`
        },
        {
            q: `Gauss–Jordan Method — Write a C program to solve simultaneous linear equations using the Gauss–Jordan Method. Normalize each pivot row and eliminate the pivot column from every other row.`,
            answer: `#include <stdio.h>
#include <math.h>

#define MAX 10

int main(void) {
    int n, i, j, k, pivot;
    double a[MAX][MAX + 1], temp, factor;

    printf("Enter number of equations (1-%d): ", MAX);
    scanf("%d", &n);
    if (n < 1 || n > MAX) return 1;
    printf("Enter each row of the augmented matrix (n coefficients and RHS):\\n");
    for (i = 0; i < n; i++)
        for (j = 0; j <= n; j++) scanf("%lf", &a[i][j]);

    for (k = 0; k < n; k++) {
        pivot = k;
        for (i = k + 1; i < n; i++)
            if (fabs(a[i][k]) > fabs(a[pivot][k])) pivot = i;
        if (fabs(a[pivot][k]) < 1e-12) {
            printf("System has no unique solution.\\n");
            return 1;
        }
        if (pivot != k)
            for (j = 0; j <= n; j++) {
                temp = a[k][j]; a[k][j] = a[pivot][j]; a[pivot][j] = temp;
            }
        temp = a[k][k];
        for (j = 0; j <= n; j++) a[k][j] /= temp;
        for (i = 0; i < n; i++) {
            if (i == k) continue;
            factor = a[i][k];
            for (j = 0; j <= n; j++) a[i][j] -= factor * a[k][j];
        }
    }
    printf("Solution:\\n");
    for (i = 0; i < n; i++) printf("x%d = %.6f\\n", i + 1, a[i][n]);
    return 0;
}`,
            output: `Enter number of equations (1-10): Enter each row of the augmented matrix (n coefficients and RHS):
Solution:
x1 = 2.000000
x2 = 3.000000
x3 = -1.000000`
        },
        {
            q: `Gauss–Seidel Iteration Method — Write a C program to solve a diagonally dominant linear system using the Gauss–Seidel Method. Stop when the largest change in any variable is smaller than the selected tolerance or when the iteration limit is reached.`,
            answer: `#include <stdio.h>
#include <math.h>

#define MAX 10

int main(void) {
    int n, i, j, iter, maxIter;
    double a[MAX][MAX], b[MAX], x[MAX] = {0}, old[MAX];
    double eps, sum, largestChange;

    printf("Enter number of equations (1-%d): ", MAX);
    scanf("%d", &n);
    if (n < 1 || n > MAX) return 1;
    printf("Enter the coefficient matrix:\\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++) scanf("%lf", &a[i][j]);
    printf("Enter the RHS values:\\n");
    for (i = 0; i < n; i++) scanf("%lf", &b[i]);
    printf("Enter maximum iterations and tolerance: ");
    scanf("%d %lf", &maxIter, &eps);

    for (i = 0; i < n; i++)
        if (fabs(a[i][i]) < 1e-12) {
            printf("Zero diagonal entry; reorder the equations.\\n");
            return 1;
        }

    for (iter = 1; iter <= maxIter; iter++) {
        for (i = 0; i < n; i++) old[i] = x[i];
        for (i = 0; i < n; i++) {
            sum = b[i];
            for (j = 0; j < n; j++) if (j != i) sum -= a[i][j] * x[j];
            x[i] = sum / a[i][i];
        }
        largestChange = 0;
        for (i = 0; i < n; i++)
            if (fabs(x[i] - old[i]) > largestChange) largestChange = fabs(x[i] - old[i]);
        if (largestChange < eps) break;
    }

    printf("Approximate solution after %d iteration(s):\\n", iter <= maxIter ? iter : maxIter);
    for (i = 0; i < n; i++) printf("x%d = %.6f\\n", i + 1, x[i]);
    return 0;
}`,
            output: `Enter number of equations (1-10): Enter the coefficient matrix:
Enter the RHS values:
Enter maximum iterations and tolerance: Approximate solution after 7 iteration(s):
x1 = 1.000000
x2 = 2.000000
x3 = -1.000000`
        }
    ] },
    { name: "FINITE DIFFERENCE TABLES", questions: [
        {
            q: `Newton Forward Difference Table — Write a C program to generate a Newton Forward Difference Table from equally spaced (x, y) data. The sample data are (0,1), (1,2), (2,5), and (3,10).`,
            answer: `#include <stdio.h>

#define MAX 20

int main(void) {
    int n, i, j;
    double x[MAX], d[MAX][MAX];

    printf("Enter number of data points (2-%d): ", MAX);
    scanf("%d", &n);
    if (n < 2 || n > MAX) return 1;
    printf("Enter each x and y pair:\\n");
    for (i = 0; i < n; i++) {
        scanf("%lf %lf", &x[i], &d[i][0]);
    }
    for (j = 1; j < n; j++)
        for (i = 0; i < n - j; i++)
            d[i][j] = d[i + 1][j - 1] - d[i][j - 1];

    printf("\\nForward Difference Table\\n");
    printf("     x          y");
    for (j = 1; j < n; j++) printf("       D^%d y", j);
    printf("\\n");
    for (i = 0; i < n; i++) {
        printf("%6.2f", x[i]);
        for (j = 0; j < n - i; j++) printf(" %10.2f", d[i][j]);
        printf("\\n");
    }
    return 0;
}`,
            output: `Enter number of data points (2-20): Enter each x and y pair:

Forward Difference Table
     x          y       D^1 y       D^2 y       D^3 y
  0.00       1.00       1.00       2.00       0.00
  1.00       2.00       3.00       2.00
  2.00       5.00       5.00
  3.00      10.00`
        },
        {
            q: `Newton Backward Difference Table — Write a C program to generate a Newton Backward Difference Table for equally spaced (x, y) data. Use the sample points (0,1), (1,2), (2,5), and (3,10).`,
            answer: `#include <stdio.h>

#define MAX 20

int main(void) {
    int n, i, j;
    double x[MAX], d[MAX][MAX] = {{0}};

    printf("Enter number of data points (2-%d): ", MAX);
    scanf("%d", &n);
    if (n < 2 || n > MAX) return 1;
    printf("Enter each x and y pair:\\n");
    for (i = 0; i < n; i++) scanf("%lf %lf", &x[i], &d[i][0]);

    for (j = 1; j < n; j++)
        for (i = j; i < n; i++)
            d[i][j] = d[i][j - 1] - d[i - 1][j - 1];

    printf("\\nBackward Difference Table\\n");
    printf("     x          y");
    for (j = 1; j < n; j++) printf("       d^%d y", j);
    printf("\\n");
    for (i = 0; i < n; i++) {
        printf("%6.2f", x[i]);
        for (j = 0; j < n; j++) {
            if (j <= i) printf(" %10.2f", d[i][j]);
            else printf(" %10s", "");
        }
        printf("\\n");
    }
    return 0;
}`,
            output: `Enter number of data points (2-20): Enter each x and y pair:

Backward Difference Table
     x          y       d^1 y       d^2 y       d^3 y
  0.00       1.00                                 
  1.00       2.00       1.00                      
  2.00       5.00       3.00       2.00           
  3.00      10.00       5.00       2.00       0.00`
        },
        {
            q: `Newton Divided Difference Table — Write a C program to construct a Newton Divided Difference Table from the points (1,1), (2,4), and (3,9).`,
            answer: `#include <stdio.h>

#define MAX 20

int main(void) {
    int n, i, j;
    double x[MAX], d[MAX][MAX] = {{0}};

    printf("Enter number of data points (2-%d): ", MAX);
    scanf("%d", &n);
    if (n < 2 || n > MAX) return 1;
    printf("Enter each x and y pair:\\n");
    for (i = 0; i < n; i++) scanf("%lf %lf", &x[i], &d[i][0]);

    for (j = 1; j < n; j++)
        for (i = 0; i < n - j; i++) {
            double denominator = x[i + j] - x[i];
            if (denominator == 0.0) {
                printf("x values must be distinct.\\n");
                return 1;
            }
            d[i][j] = (d[i + 1][j - 1] - d[i][j - 1]) / denominator;
        }

    printf("\\nDivided Difference Table\\n");
    printf("     x         f[x]");
    for (j = 1; j < n; j++) printf("      DD^%d", j);
    printf("\\n");
    for (i = 0; i < n; i++) {
        printf("%6.2f", x[i]);
        for (j = 0; j < n - i; j++) printf(" %10.4f", d[i][j]);
        printf("\\n");
    }
    return 0;
}`,
            output: `Enter number of data points (2-20): Enter each x and y pair:

Divided Difference Table
     x         f[x]      DD^1      DD^2
  1.00     1.0000     3.0000     1.0000
  2.00     4.0000     5.0000
  3.00     9.0000`
        }
    ] },
    { name: "INTERPOLATION", questions: [
        {
            q: `Newton Divided Difference Interpolation — Write a C program to evaluate the Newton Divided Difference Interpolation Polynomial for the points (1,1), (2,4), (3,9). Find y when x = 2.5.`,
            answer: `#include <stdio.h>

#define MAX 20

int main(void) {
    int n, i, j;
    double x[MAX], dd[MAX], value, result;

    printf("Enter number of data points (2-%d): ", MAX);
    scanf("%d", &n);
    if (n < 2 || n > MAX) return 1;
    printf("Enter each x and y pair:\\n");
    for (i = 0; i < n; i++) scanf("%lf %lf", &x[i], &dd[i]);
    printf("Enter x at which y is required: ");
    scanf("%lf", &value);

    for (j = 1; j < n; j++)
        for (i = n - 1; i >= j; i--) {
            double denominator = x[i] - x[i - j];
            if (denominator == 0.0) {
                printf("x values must be distinct.\\n");
                return 1;
            }
            dd[i] = (dd[i] - dd[i - 1]) / denominator;
        }

    result = dd[n - 1];
    for (i = n - 2; i >= 0; i--) result = dd[i] + (value - x[i]) * result;
    printf("Interpolated value y = %.6f\\n", result);
    return 0;
}`,
            output: `Enter number of data points (2-20): Enter each x and y pair:
Enter x at which y is required: Interpolated value y = 6.250000`
        },
        {
            q: `Lagrange Interpolation Polynomial — Write a C program to find an interpolated value using the Lagrange Interpolation Polynomial. Use the data points (1,1), (2,4), (3,9) and find y at x = 2.5.`,
            answer: `#include <stdio.h>

#define MAX 20

int main(void) {
    int n, i, j;
    double x[MAX], y[MAX], value, sum = 0.0, product;

    printf("Enter number of data points (2-%d): ", MAX);
    scanf("%d", &n);
    if (n < 2 || n > MAX) return 1;
    printf("Enter each x and y pair:\\n");
    for (i = 0; i < n; i++) scanf("%lf %lf", &x[i], &y[i]);
    printf("Enter x at which y is required: ");
    scanf("%lf", &value);

    for (i = 0; i < n; i++) {
        product = y[i];
        for (j = 0; j < n; j++) {
            if (j != i) {
                if (x[i] == x[j]) {
                    printf("x values must be distinct.\\n");
                    return 1;
                }
                product *= (value - x[j]) / (x[i] - x[j]);
            }
        }
        sum += product;
    }
    printf("Interpolated value y = %.6f\\n", sum);
    return 0;
}`,
            output: `Enter number of data points (2-20): Enter each x and y pair:
Enter x at which y is required: Interpolated value y = 6.250000`
        }
    ] },
    { name: "NUMERICAL INTEGRATION", questions: [
        {
            q: `Trapezoidal Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using the composite Trapezoidal Rule. Enter the integration limits and number of subintervals.`,
            answer: `#include <stdio.h>

 double f(double x) {
    return 1.0 / (1.0 + x * x * x * x);
}

int main(void) {
    double a, b, h, sum, integral;
    int n, i;

    printf("Enter lower and upper limits a, b: ");
    scanf("%lf %lf", &a, &b);
    printf("Enter number of subintervals: ");
    scanf("%d", &n);
    if (n < 1 || b <= a) {
        printf("Invalid limits or number of subintervals.\\n");
        return 1;
    }

    h = (b - a) / n;
    sum = (f(a) + f(b)) / 2.0;
    for (i = 1; i < n; i++) sum += f(a + i * h);
    integral = h * sum;
    printf("Approximate integral = %.6f\\n", integral);
    return 0;
}`,
            output: `Enter lower and upper limits a, b: Enter number of subintervals: Approximate integral = 0.861732`
        },
        {
            q: `Simpson’s 1/3 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x⁴) from a to b using Simpson’s 1/3 Rule. The number of subintervals n must be positive and even.`,
            answer: `#include <stdio.h>

 double f(double x) {
    return 1.0 / (1.0 + x * x * x * x);
}

int main(void) {
    double a, b, h, sum;
    int n, i;

    printf("Enter lower and upper limits a, b: ");
    scanf("%lf %lf", &a, &b);
    printf("Enter an even number of subintervals: ");
    scanf("%d", &n);
    if (n <= 0 || n % 2 != 0 || b <= a) {
        printf("Simpson's 1/3 Rule needs b > a and a positive even n.\\n");
        return 1;
    }

    h = (b - a) / n;
    sum = f(a) + f(b);
    for (i = 1; i < n; i++) {
        if (i % 2 == 0) sum += 2.0 * f(a + i * h);
        else sum += 4.0 * f(a + i * h);
    }
    printf("Approximate integral = %.6f\\n", h * sum / 3.0);
    return 0;
}`,
            output: `Enter lower and upper limits a, b: Enter an even number of subintervals: Approximate integral = 0.867114`
        },
        {
            q: `Simpson’s 3/8 Rule — Write a C program to approximate the integral of f(x) = 1 / (1 + x²) from a to b using Simpson’s 3/8 Rule. The number of subintervals must be a positive multiple of three.`,
            answer: `#include <stdio.h>

 double f(double x) {
    return 1.0 / (1.0 + x * x);
}

int main(void) {
    double a, b, h, sum;
    int n, i;

    printf("Enter lower and upper limits a, b: ");
    scanf("%lf %lf", &a, &b);
    printf("Enter number of subintervals (multiple of 3): ");
    scanf("%d", &n);
    if (n <= 0 || n % 3 != 0 || b <= a) {
        printf("Simpson's 3/8 Rule needs b > a and n divisible by 3.\\n");
        return 1;
    }

    h = (b - a) / n;
    sum = f(a) + f(b);
    for (i = 1; i < n; i++) {
        if (i % 3 == 0) sum += 2.0 * f(a + i * h);
        else sum += 3.0 * f(a + i * h);
    }
    printf("Approximate integral = %.6f\\n", 3.0 * h * sum / 8.0);
    return 0;
}`,
            output: `Enter lower and upper limits a, b: Enter number of subintervals (multiple of 3): Approximate integral = 0.784615`
        }
    ] },
    { name: "NUMERICAL SOLUTION OF ODES", questions: [
        {
            q: `Euler’s Method — Write a C program for Euler’s Method using the differential equation dy/dx = x·y. Read the initial condition (x₀, y₀), final x-value and number of steps, and print the calculated values at each step.`,
            answer: `#include <stdio.h>

 double f(double x, double y) {
    return x * y;
}

int main(void) {
    double x, y, xn, h;
    int n, i;

    printf("Enter initial x0 and y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Enter final x value: ");
    scanf("%lf", &xn);
    printf("Enter number of steps: ");
    scanf("%d", &n);
    if (n <= 0 || xn == x) {
        printf("Invalid final value or number of steps.\\n");
        return 1;
    }

    h = (xn - x) / n;
    printf("\\n       x          y\\n");
    printf("%8.4f %10.6f\\n", x, y);
    for (i = 0; i < n; i++) {
        y = y + h * f(x, y);
        x = x + h;
        printf("%8.4f %10.6f\\n", x, y);
    }
    printf("Approximate y(%.4f) = %.6f\\n", xn, y);
    return 0;
}`,
            output: `Enter initial x0 and y0: Enter final x value: Enter number of steps: 
       x          y
  0.1000   1.000000
  0.2000   1.010000
  0.3000   1.030200
  0.4000   1.061106
  0.5000   1.103550
Approximate y(0.5000) = 1.103550`
        },
        {
            q: `Modified Euler’s Method — Write a C program for the Modified Euler Method using dy/dx = x² + y. Use a predictor step and repeatedly correct the next y-value with the average of the beginning and ending slopes until the correction tolerance is met.`,
            answer: `#include <stdio.h>
#include <math.h>

double f(double x, double y) {
    return x * x + y;
}

int main(void) {
    double x, y, xn, h, eps, slopeStart, guess, corrected, error;
    int n, i, correction;

    printf("Enter initial x0 and y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Enter final x value: ");
    scanf("%lf", &xn);
    printf("Enter number of steps: ");
    scanf("%d", &n);
    printf("Enter correction tolerance: ");
    scanf("%lf", &eps);
    if (n <= 0 || xn == x || eps <= 0) {
        printf("Invalid input.\\n");
        return 1;
    }

    h = (xn - x) / n;
    printf("\\n       x          y\\n");
    printf("%8.4f %10.6f\\n", x, y);
    for (i = 0; i < n; i++) {
        slopeStart = f(x, y);
        guess = y + h * slopeStart;
        for (correction = 0; correction < 1000; correction++) {
            corrected = y + (h / 2.0) * (slopeStart + f(x + h, guess));
            error = fabs(corrected - guess);
            guess = corrected;
            if (error < eps) break;
        }
        y = guess;
        x += h;
        printf("%8.4f %10.6f\\n", x, y);
    }
    printf("Approximate y(%.4f) = %.6f\\n", xn, y);
    return 0;
}`,
            output: `Enter initial x0 and y0: Enter final x value: Enter number of steps: Enter correction tolerance: 
       x          y
  0.0000   1.000000
  0.1000   1.105789
  0.2000   1.224820
Approximate y(0.2000) = 1.224820`
        },
        {
            q: `Runge–Kutta Second-Order Method — Write a C program for the second-order Runge–Kutta midpoint method for dy/dx = x·y. Read the initial condition, final x-value and step count, and print the approximate solution at every step.`,
            answer: `#include <stdio.h>

double f(double x, double y) {
    return x * y;
}

int main(void) {
    double x, y, xn, h, k1, k2;
    int n, i;

    printf("Enter initial x0 and y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Enter final x value: ");
    scanf("%lf", &xn);
    printf("Enter number of steps: ");
    scanf("%d", &n);
    if (n <= 0 || xn == x) {
        printf("Invalid final value or number of steps.\\n");
        return 1;
    }

    h = (xn - x) / n;
    printf("\\n       x          y\\n");
    printf("%8.4f %10.6f\\n", x, y);
    for (i = 0; i < n; i++) {
        k1 = h * f(x, y);
        k2 = h * f(x + h / 2.0, y + k1 / 2.0);
        y += k2;
        x += h;
        printf("%8.4f %10.6f\\n", x, y);
    }
    printf("Approximate y(%.4f) = %.6f\\n", xn, y);
    return 0;
}`,
            output: `Enter initial x0 and y0: Enter final x value: Enter number of steps: 
       x          y
  0.1000   1.000000
  0.2000   1.015075
  0.3000   1.040706
  0.4000   1.077677
  0.5000   1.127142
Approximate y(0.5000) = 1.127142`
        },
        {
            q: `Runge–Kutta Fourth-Order Method — Write a C program for the fourth-order Runge–Kutta Method. The source’s example function is dy/dx = (y² − x²) / (y² + x²). Read the initial condition, final x-value and step count, then print the table and final approximation.`,
            answer: `#include <stdio.h>
#include <math.h>

double f(double x, double y) {
    double denominator = y * y + x * x;
    if (fabs(denominator) < 1e-12) return 0.0;
    return (y * y - x * x) / denominator;
}

int main(void) {
    double x, y, xn, h, k1, k2, k3, k4;
    int n, i;

    printf("Enter initial x0 and y0: ");
    scanf("%lf %lf", &x, &y);
    printf("Enter final x value: ");
    scanf("%lf", &xn);
    printf("Enter number of steps: ");
    scanf("%d", &n);
    if (n <= 0 || xn == x) {
        printf("Invalid final value or number of steps.\\n");
        return 1;
    }

    h = (xn - x) / n;
    printf("\\n       x          y\\n");
    printf("%8.4f %10.6f\\n", x, y);
    for (i = 0; i < n; i++) {
        k1 = h * f(x, y);
        k2 = h * f(x + h / 2.0, y + k1 / 2.0);
        k3 = h * f(x + h / 2.0, y + k2 / 2.0);
        k4 = h * f(x + h, y + k3);
        y += (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;
        x += h;
        printf("%8.4f %10.6f\\n", x, y);
    }
    printf("Approximate y(%.4f) = %.6f\\n", xn, y);
    return 0;
}`,
            output: `Enter initial x0 and y0: Enter final x value: Enter number of steps: 
       x          y
  0.0000   1.000000
  0.1000   1.099425
  0.2000   1.196007
  0.3000   1.288199
  0.4000   1.375278
Approximate y(0.4000) = 1.375278`
        }
    ] }
];

var currentTopicIndex = -1;

function startWebsite() {
    document.getElementById("question-search").addEventListener("input", showQuestionsList);
    showAllTopicCards();
    showTopics();
}

function showAllTopicCards() {
    var container = document.getElementById("topics-container");
    container.innerHTML = "";

    for (var i = 0; i < topics.length; i++) {
        var card = document.createElement("button");
        card.type = "button";
        card.className = "topic-card";

        var title = document.createElement("h3");
        title.textContent = topics[i].name;

        var count = document.createElement("p");
        count.textContent = topics[i].questions.length + " programs";

        card.appendChild(title);
        card.appendChild(count);
        card.onclick = makeTopicOpener(i);
        container.appendChild(card);
    }
}

function makeTopicOpener(index) {
    return function () { openTopic(index); };
}

function openTopic(index) {
    currentTopicIndex = index;
    document.getElementById("topic-title").textContent = topics[index].name;
    document.getElementById("topic-summary").textContent = topics[index].questions.length + " programs in this category";
    document.getElementById("question-search").value = "";
    showQuestionsList();
    document.getElementById("topics-view").className = "hidden";
    document.getElementById("questions-view").className = "view";
    document.getElementById("answer-view").className = "hidden";
}

function showQuestionsList() {
    if (currentTopicIndex < 0) return;
    var container = document.getElementById("questions-container");
    var search = document.getElementById("question-search").value.toLowerCase().trim();
    var visibleCount = 0;
    container.innerHTML = "";

    for (var i = 0; i < topics[currentTopicIndex].questions.length; i++) {
        var question = topics[currentTopicIndex].questions[i];
        if (search && question.q.toLowerCase().indexOf(search) === -1) continue;

        var item = document.createElement("button");
        item.type = "button";
        item.className = "question-item";
        var number = document.createElement("strong");
        number.textContent = (i + 1) + ". ";
        item.appendChild(number);
        item.appendChild(document.createTextNode(question.q));
        item.onclick = makeQuestionOpener(i);
        container.appendChild(item);
        visibleCount++;
    }

    if (visibleCount === 0) {
        var emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No programs found.";
        container.appendChild(emptyMessage);
    }
    document.getElementById("question-result-count").textContent = visibleCount + (visibleCount === 1 ? " program" : " programs");
}

function makeQuestionOpener(index) {
    return function () { openQuestion(index); };
}

function openQuestion(index) {
    var question = topics[currentTopicIndex].questions[index];
    document.getElementById("question-display").textContent = question.q;
    document.getElementById("answer-display").textContent = question.answer;
    document.getElementById("output-display").textContent = question.output;
    document.getElementById("topics-view").className = "hidden";
    document.getElementById("questions-view").className = "hidden";
    document.getElementById("answer-view").className = "view";
}

function showTopics() {
    document.getElementById("topics-view").className = "view";
    document.getElementById("questions-view").className = "hidden";
    document.getElementById("answer-view").className = "hidden";
}

function showQuestions() {
    document.getElementById("topics-view").className = "hidden";
    document.getElementById("questions-view").className = "view";
    document.getElementById("answer-view").className = "hidden";
}

startWebsite();

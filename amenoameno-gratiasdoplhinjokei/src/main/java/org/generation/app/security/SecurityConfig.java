package org.generation.app.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.*;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
		
		protected void configure(AuthenticationManagerBuilder auth) throws Exception  {
			auth.inMemoryAuthentication()
			.withUser("lechuga")
				.password("{noop}123")
				.roles("ADMIN", "USER", "SAIYAJIN")
			.and()
			.withUser("saul")
				.password("{noop}456")
				.roles("USER")
			.and()
			.withUser("perry")
				.password("{noop}456")
				.roles("USER", "SAIYAJIN");;
		}
		
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http
			.csrf().disable()
				//.httpBasic().and()
				.authorizeRequests()
//				.antMatchers(HttpMethod.POST, "/api/**").hasAnyRole("ADMIN", "SAIYAJIN")
//				.antMatchers(HttpMethod.PUT, "/api/**").hasAnyRole("ADMIN")
//				.antMatchers(HttpMethod.DELETE, "/api/**").hasAnyRole("ADMIN")
//				.antMatchers(HttpMethod.GET, "/api/**").hasAnyRole("ADMIN", "SAIYAJIN", "USER")
//				.antMatchers("/dashboard/**").hasRole("ADMIN")
//				.antMatchers("/**").permitAll()
				.anyRequest().authenticated()
				
				.and().formLogin().permitAll()

				//Las peticiones para login pasan por este filtro 
				.and().addFilterBefore(new LoginFilter("/login", authenticationManager()),
						UsernamePasswordAuthenticationFilter.class)
				//El filtro valora si las peticiones http sólo si el token es correcto
				.addFilterBefore(new JwtFilter(), UsernamePasswordAuthenticationFilter.class);
				
			
		}
		

		
		
	}
